'use client';

import {Category, Media} from "@/payload-types";
import Image from 'next/image'
import Link from 'next/link'

interface ProjectGroupsProps {
    categories: Category[];
}

const isMedia = (image: number | Media): image is Media => {
  return (image as Media).url !== undefined;
};

export default function ProjectGroups(props: ProjectGroupsProps) {
    console.log(props.categories);
    return (
        <div className="flex items-center justify-center m-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
                {props.categories.map((category, index) => (
                    <Link key={index} href={`/projektek/${category.id}`} className="block relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out group" >
                        <Image
                        src={isMedia(category.image) ? category.image.url ?? '' : ''}
                        alt={isMedia(category.image) ? category.image.alt ?? '' : ''}
                        width={300}
                        height={200}
                        className="w-full h-auto object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-100 group-hover:bg-opacity-0 transition-opacity duration-300">
                            <p className="text-white text-center font-semibold px-2 py-1 rounded">
                                {category.name}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}