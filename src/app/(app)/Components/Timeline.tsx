"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import PageTitle from "@/app/(app)/Components/PageTitle";
import { Event, Media, News } from "@/payload-types";

type TimelineProps =
  | {
      items: Event[];
      newsPage?: false;
    }
  | {
      items: News[];
      newsPage?: true;
    };

const isMedia = (
  picture: number | Media | null | undefined,
): picture is Media => {
  return (
    picture != null &&
    typeof picture !== "number" &&
    (picture as Media).url !== undefined
  );
};

export default function Timeline({ items = [], newsPage }: TimelineProps) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const timelineRef = useRef<HTMLDivElement>(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(
              entry.target.getAttribute("data-index") || "-1",
            );
            if (index !== -1 && index > activeIndex) setActiveIndex(index);
          }
        });
      },
      { threshold: 0.5 },
    );

    const timelineItems =
      timelineRef.current?.querySelectorAll(".timeline-item");
    timelineItems?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [activeIndex]);

  return (
    <div className="bg-black min-h-screen">
      <PageTitle title={newsPage ? "Aktuális" : `${currentYear - 2008} év`} />
      <div className="relative" ref={timelineRef}>
        <div className="absolute left-2 top-0 bottom-0 w-1 bg-[#3E3F46]" />
        {items.map((item, index) => (
          <div
            id={`news-${"id" in item ? item.id : ""}`}
            key={"date" in item ? item.date.toString() : ""}
            className={`timeline-item relative mb-12 sm:mb-16 transition-all duration-500 ease-in-out ${
              index <= activeIndex
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
            data-index={index}
          >
            <div className="absolute left-2 top-0 w-8 h-8 -ml-3.5 bg-black border-2 border-[#3E3F46] flex items-center justify-center transform transition-transform duration-300">
              <span className="text-gray-400 text-xs sm:text-sm font-bold">
                {"date" in item
                  ? new Date(item.date).getFullYear().toString().slice(-2)
                  : ""}
              </span>
            </div>
            <div className="ml-8 sm:ml-14 bg-[#27272A] p-4 sm:p-6 shadow-lg border-l-4 border-[#3E3F46] transition-all duration-300 hover:border-gray-400">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-200">
                {"title" in item ? item.title : ""}
              </h2>
              <p className="text-xs sm:text-base text-gray-400 mb-6 text-justify">
                {"description" in item ? item.description || "" : ""}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {isMedia("picture" in item ? item.picture : null) && (
                  <div className="relative aspect-video bg-[#27272A] overflow-hidden">
                    <Image
                      src={
                        "picture" in item &&
                        isMedia(item.picture) &&
                        item.picture.url
                          ? item.picture.url
                          : "/placeholder.svg"
                      }
                      alt={`Image for year ${
                        "date" in item ? new Date(item.date).getFullYear() : ""
                      }`}
                      fill
                      objectFit="contain"
                      className="transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
