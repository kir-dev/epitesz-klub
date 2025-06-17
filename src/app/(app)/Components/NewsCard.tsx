import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

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
  const imgRef = useRef<HTMLImageElement>(null);

  return (
    <Link href={href}>
      <div className="rounded-lg shadow-md md:bg-gray-900 text-white">
        <div
          className={cn(
            "flex flex-col md:flex-row overflow-hidden",
            textOnLeft && "md:flex-row-reverse",
          )}
        >
          <div
            className="md:hidden absolute inset-0 bg-cover bg-center -z-20 rounded-lg"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="md:hidden absolute inset-0 bg-black bg-opacity-40 -z-20" />

          <div className={cn("hidden md:block inset-0 md:relative w-full")}>
            <img
              ref={imgRef}
              src={image}
              alt={imageAlt}
              className="h-[260px] md:h-[310px] object-cover"
            />
          </div>
          <div
            className={cn(
              "w-full h-[200px] sm:h-[260px] md:h-[310px] p-4 md:p-6 flex flex-col justify-start",
            )}
          >
            <h3 className="text-xl font-semibold mb-3">{title}</h3>

            <div
              className={`md:absolute top-4 ${textOnLeft ? "right-4" : "left-4"}`}
            >
              <div className="inline-block md:bg-gray-900 text-white text-sm sm:text-base md:py-2 md:px-4 rounded-md">
                {new Date(date).toLocaleDateString("hu-HU", {})}
              </div>
            </div>
            <p className="text-gray-300 text-wrap text-sm sm:text-base truncate">
              {description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
