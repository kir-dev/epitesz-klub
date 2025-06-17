"use client";
import { useEffect, useRef, useState } from "react";
import { Media, News } from "@/payload-types";
import NewsCard from "@/app/(app)/Components/NewsCard";
import { useTimelineGap } from "@/hooks/useTimelineGap";

interface lineProps {
  news: News[];
}

const isMedia = (
  picture: number | Media | null | undefined,
): picture is Media => {
  return (picture as Media) !== null;
};

export default function StrafingLine(props: lineProps) {
  const timelineGap = useTimelineGap();
  const timelineRef = useRef<HTMLDivElement>(null);
  const [positions, setPositions] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const updatePositions = () => {
      if (!timelineRef.current) return;

      const parentRect = timelineRef.current.getBoundingClientRect();

      const children = Array.from(timelineRef.current.children);
      const newPositions = children.map((child) => {
        const rect = child.getBoundingClientRect();
        return {
          x: rect.left - parentRect.left + rect.width / 2,
          y: rect.top - parentRect.top + rect.height / 2,
        };
      });

      setPositions(newPositions);
    };

    updatePositions();
    window.addEventListener("resize", updatePositions);
    return () => window.removeEventListener("resize", updatePositions);
  }, [timelineGap]);

  const totalHeight = props.news.length * 350 + 150;

  return (
    <div
      className="min-h-screen my-8 uniform-margin relative"
      style={{ height: `${totalHeight}px` }}
    >
      <div className="absolute left-0 top-0 w-full -z-20">
        <svg
          className="w-full stroke-white stroke-[4px] overflow-visible"
          style={{ height: `${totalHeight}px` }}
        >
          <path
            d={
              Array.isArray(positions)
                ? positions
                    .map((pos, index) => {
                      return `${index === 0 ? `M ${pos.x} ${pos.y}` : `H ${pos.x} V ${pos.y}`}`;
                    })
                    .join(" ")
                : ""
            }
          />
        </svg>
      </div>
      <div ref={timelineRef} className="relative">
        {Array.isArray(props.news) &&
          props.news.map((post, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={post.id}
                className={`absolute ${isLeft ? "left-0" : "right-0"} w-48 sm:w-56 md:w-1/3`}
                style={{ top: `${index * timelineGap}px` }}
              >
                <NewsCard
                  href={`/recent#news-${post.id}`}
                  image={isMedia(post.picture) ? (post.picture.url ?? "") : ""}
                  imageAlt={
                    isMedia(post.picture) ? (post.picture.alt ?? "") : ""
                  }
                  date={post.date}
                  description={post.shortDescription}
                  title={post.title}
                  textOnLeft={!isLeft}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}
