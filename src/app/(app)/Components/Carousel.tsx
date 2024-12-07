// src/app/(app)/Components/Carousel.tsx
"use client";

import {Carousel} from "flowbite-react";

interface MediaDoc {
    url: string;
    alt: string;
}

interface Data {
    docs: MediaDoc[];
}

export function MyCarousel({data}: { data: Data }) {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel slideInterval={5000} loop={true}>
                <div className="flex flex-wrap justify-center items-center h-full">
                    {data.docs.map((doc: MediaDoc, i: number) => (
                        <div key={i} className="flex justify-center items-center h-full p-2">
                            <img
                                src={doc.url}
                                alt={doc.alt}
                                className="h-full object-contain"
                            />
                        </div>
                    ))}
                </div>
            </Carousel>
        </div>
    );
}