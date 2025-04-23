'use client'
import {useEffect, useState} from 'react';
import {Media, News} from "@/payload-types";
import NewsCard from "@/app/(app)/Components/NewsCard";

interface lineProps {
    news: News[];
}

const isMedia = (picture: number | Media | null | undefined): picture is Media => {
    return (picture as Media) !== null;
};

export default function StrafingLine(props: lineProps) {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => setWidth(window?.innerWidth ?? 0);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const totalHeight = props.news.length * 350 + 150;

    return (
        <div className="min-h-screen py-8 w-full relative" style={{ height: `${totalHeight}px` }}>
            <div className="absolute left-0 top-0 w-full">
                <svg
                    className="w-full stroke-white stroke-[4px] overflow-visible" style={{ height: `${totalHeight}px` }}
                >
                    <path d={Array.isArray(props.news) ? props.news.map((event, index) => {
                        const y = index * 350 + 150;
                        let x1 = 0;
                        let x2 = 0;
                        if (index === props.news.length - 1) {
                            x1 = index % 2 ? width * 0.85 : width * 0.15;
                            x2 = index % 2 ? width * 0.75 : width * 0.25;
                        } else {
                            x1 = index % 2 ? width * 0.85 : width * 0.15;
                            x2 = index % 2 ? width * 0.15 : width * 0.85;
                        }
                        return `${index === 0 ? 'M' : 'L'} ${x1} ${y + 50} H ${x2} ${index < props.news.length - 1 ? `V ${y + 250}` : ''}`;
                    }).join(' ') : ''} />
                </svg>
            </div>
            <div className="relative">
                {Array.isArray(props.news) && props.news.map((post, index) => {
                    const isLeft = index % 2 === 0;
                    return (
                        <div
                            key={post.id}
                            className={`absolute ${isLeft ? 'left-0' : 'right-0'} w-1/3`}
                            style={{ top: `${index * 350}px` }}
                        >
                            <NewsCard
                                href={`/recent#news-${post.id}`}
                                image={isMedia(post.picture) ? post.picture.url ?? '' : ''}
                                imageAlt={isMedia(post.picture) ? post.picture.alt ?? '' : ''}
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
    )
}