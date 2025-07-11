'use client';

import { Category, Media } from "@/payload-types";
import Image from "next/image";
import Link from "next/link";

interface ProjectGroupsProps {
  categories: Category[];
}

const isMedia = (image: null | undefined | number | Media): image is Media => {
  if (image === null || image === undefined) return false;
  return (image as Media).url !== undefined;
};

export default function ProjectGroups(props: ProjectGroupsProps) {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-5 sm:gap-10">
        {props.categories.map((category, index) => (
          <Link
            key={index}
            href={`/projektek/${category.id}`}
            className="block relative aspect-square overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out group"
          >
            <Image
              src={isMedia(category.image) ? (category.image.url ?? "") : ""}
              alt={isMedia(category.image) ? (category.image.alt ?? "") : ""}
              width={350}
              height={350}
              className="object-fill w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col items-center justify-center opacity-100 group-hover:bg-opacity-0 transition-opacity duration-300">
              <Image
                src={isMedia(category.icon) ? (category.icon.url ?? "") : ""}
                alt={isMedia(category.icon) ? (category.icon.alt ?? "") : ""}
                width={150}
                height={150}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}