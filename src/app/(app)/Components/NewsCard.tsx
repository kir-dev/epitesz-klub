import React from "react";
import Link from 'next/link';
import {cn} from "@/lib/utils";

export interface NewsCardProps {
    href: string;
    title: string;
    description: string;
    date: string;
    image: string;
    imageAlt?: string;
    textOnLeft?: boolean;
}

const NewsCard: React.FC<NewsCardProps> = ({
    href,
    title,
    description,
    date,
    image,
    imageAlt = "News image",
    textOnLeft = false,
}) => {
    return (
        <Link href={href}>
            <div className="w-full h-auto max-h-[300px] overflow-hidden rounded-lg shadow-md bg-gray-900 text-white">
                {image ? (
                    <div className={cn(
                        "flex flex-col md:flex-row",
                        textOnLeft && "md:flex-row-reverse"
                    )}>
                        <div className="relative w-full md:w-1/2">
                            <img
                                src={image}
                                alt={imageAlt}
                                className=" h-[300px] object-cover"
                            />
                            <div className="absolute top-4 left-4">
                                <div className="inline-block bg-gray-900 text-white py-2 px-4 rounded-md">
                                    {new Date(date).toLocaleDateString('hu-HU', {})}
                                </div>
                            </div>
                        </div>
                        <div className="w-full max-h-[300px] md:w-1/2 p-6 flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                                <p className="text-gray-300">{description}</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="w-full p-6">
                        <div className="mb-4">
                            <div className="inline-block bg-gray-900 text-white py-2 px-4 rounded-md border border-gray-700">
                                {new Date(date).toLocaleDateString('hu-HU', {})}
                            </div>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-xl font-semibold mb-3">{title}</h3>
                            <p className="text-gray-300">{description}</p>
                        </div>
                    </div>
                )}
            </div>
        </Link>
    );
};

export default NewsCard;