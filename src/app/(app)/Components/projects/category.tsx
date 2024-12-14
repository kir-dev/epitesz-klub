'use client';

import { Event } from "@/payload-types";
import Image from "next/image"

interface CategoryEventProps {
    events: Event[];
}


export default function CategoryEvents( props: CategoryEventProps ) {
    console.log("Ok");
    console.log(props.events);


    return (
    <div className="container mx-auto px-4 py-8">
        {props.events.map((event, index) => (
            <div key={index} className="max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl font-bold">
                {event.title}
                <span className="text-muted-foreground ml-2">/ {new Date(event.date).toLocaleDateString('hu-HU', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                })}</span>
              </div>
            </div>
            <div className="space-y-6">
              <div className="relative w-full aspect-video overflow-hidden rounded-lg">
                <Image
                  src={event.picture.url ?? ''}
                  alt={event.picture.alt}
                  width={600}
                  height={500}
                  className="object-cover"
                />
              </div>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
    );
}