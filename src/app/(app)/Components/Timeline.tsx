'use client'

import {useEffect, useRef, useState} from "react"
import Image from "next/image"
import PageTitle from "@/app/(app)/Components/PageTitle"
import {Event, Media} from "@/payload-types"

interface TimelineProps {
            events: Event[]
        }

        const isMedia = (picture: number | Media): picture is Media => {
            return (picture as Media).url !== undefined
        }

        export default function Timeline({ events }: TimelineProps) {
            const [activeIndex, setActiveIndex] = useState(-1)
            const timelineRef = useRef<HTMLDivElement>(null)
            const currentYear = new Date().getFullYear()

            useEffect(() => {
                const observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting) {
                                const index = Number(entry.target.getAttribute("data-index") || "-1")
                                setActiveIndex(index)
                            }
                        })
                    },
                    { threshold: 0.5 }
                )

                const timelineItems = timelineRef.current?.querySelectorAll(".timeline-item")
                timelineItems?.forEach((item) => observer.observe(item))

                return () => observer.disconnect()
            }, [])

            return (
                <div className="bg-black min-h-screen p-8">
                    <PageTitle title={`${currentYear - 2008} év`} />
                    <div className="max-w-4xl mx-auto" ref={timelineRef}>
                        <div className="relative">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#3E3F46]" />
                            {events.map((item, index) => (
                                <div
                                    key={item.date.toString()}
                                    className={`timeline-item relative mb-16 transition-all duration-500 ease-in-out ${index <= activeIndex ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
                                    data-index={index}
                                >
                                    <div className="absolute left-0 top-0 w-8 h-8 -ml-3.5 bg-black border-2 border-[#3E3F46] flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
                                        <span className="text-gray-400 text-sm font-bold">{new Date(item.date).getFullYear().toString().slice(-2)}</span>
                                    </div>
                                    <div className="ml-12 bg-[#27272A] p-6 shadow-lg border-l-4 border-[#3E3F46] transition-all duration-300 hover:border-gray-400">
                                        <h2 className="text-3xl font-bold mb-4 text-gray-200">{new Date(item.date).getFullYear()}</h2>
                                        <p className="text-gray-400 mb-6 text-justify">{item.description}</p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {isMedia(item.picture) && (
                                                <div className="relative h-48 bg-[#3E3F46] overflow-hidden">
                                                    <Image
                                                        src={item.picture.url || "/placeholder.svg"}
                                                        alt={`Image for year ${new Date(item.date).getFullYear()}`}
                                                        layout="fill"
                                                        objectFit="cover"
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
                </div>
            )
        }