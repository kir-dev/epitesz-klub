'use client'
import {useEffect, useState} from 'react';
import {Event, Media} from "@/payload-types";
import EventCard from "@/app/(app)/Components/EventCard";

interface lineProps {
    events: Event[];
}

const isMedia = (picture: number | Media): picture is Media => {
    return (picture as Media).url !== undefined;
};

export default function StrafingLine(props: lineProps) {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => setWidth(window?.innerWidth ?? 0);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const totalHeight = props.events.length * 350 + 150;

    return (
        <div className="min-h-screen p-8 w-full relative" style={{ height: `${totalHeight}px` }}>
            {/* Timeline path */}
            <div className="absolute left-0 top-0 w-full">
                <svg
                    className="w-full stroke-white stroke-[4px]" style={{ height: `${totalHeight}px` }}
                >
                    <path d={Array.isArray(props.events) ? props.events.map((event, index) => {
                        const y = index * 350 + 150;
                        let x1 = 0;
                        let x2 = 0;
                        if (index === props.events.length - 1) {
                            x1 = index % 2 ? width * 0.85 : width * 0.15;
                            x2 = index % 2 ? width * 0.75 : width * 0.25;
                        } else {
                            x1 = index % 2 ? width * 0.85 : width * 0.15;
                            x2 = index % 2 ? width * 0.15 : width * 0.85;
                        }
                        return `${index === 0 ? 'M' : 'L'} ${x1} ${y + 50} H ${x2} ${index < props.events.length - 1 ? `V ${y + 250}` : ''}`;
                    }).join(' ') : ''} />
                </svg>
            </div>

            {/* Event boxes */}
            <div className="relative">
                {Array.isArray(props.events) && props.events.map((event, index) => {
                    const isLeft = index % 2 === 0;
                    return (
                        <div
                            key={event.id}
                            className={`absolute ${isLeft ? 'left-10' : 'right-0'} w-1/3`}
                            style={{ top: `${index * 350}px` }}
                        >
                            <EventCard
                                title={event.title}
                                imageUrl={isMedia(event.picture) ? event.picture.url ?? '' : ''}
                                date={event.date}
                                description={event.description}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    )
}