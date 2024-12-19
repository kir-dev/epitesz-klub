// src/app/(app)/Components/Timeline.tsx
'use client'
import {useEffect, useState} from 'react';
import {Event} from "@/payload-types"
import EventCard from "@/app/(app)/Components/EventCard";

interface timelineProps {
    events: Event[];
}

export default function Timeline(props: timelineProps) {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => setWidth(window?.innerWidth ?? 0);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="min-h-screen p-8 w-full relative">
                {/* Timeline path */}
                <div className="absolute left-0 top-0 w-full h-full">
                    <svg
                        className="w-full h-full -z-50"
                        style={{
                            strokeWidth: '4px',
                            stroke: 'white',
                            fill: 'none'
                        }}
                    >
                        <path d={Array.isArray(props.events) ? props.events.map((event, index) => {
                            const y = index * 350;
                            const x1 = index % 2 ? width * 0.85 : width * 0.15;
                            const x2 = index % 2 ? width * 0.15 : width * 0.85;
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
                                className={`absolute ${isLeft ? 'left-10' : 'right-10'} w-1/3`}
                                style={{ top: `${index * 350}px` }}
                            >
                                <EventCard
                                    title={event.cím}
                                    imageUrl={event.kép.url ?? ''}
                                    date={event.dátum}
                                    description={event.leírás}
                                />
                            </div>
                        );
                    })}
                </div>
        </div>
    )
}