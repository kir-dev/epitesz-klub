'use client'

import React from "react"
import ContactInfo from "@/app/(app)/Components/ContactInfo"
import Link from "next/link";

import dynamic from 'next/dynamic';
import Form from "@/app/(app)/Components/Form";

// Dinamikus importálás: térkép csak a böngészőben jelenik meg
const Map = dynamic(() => import('@/app/(app)/Components/Map'), { ssr: false });


export default function Page() {
    return (
        <div className="min-h-screen text-zinc-100 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-zinc-800 to-transparent opacity-20 blur-3xl"></div>
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <div className="flex items-center gap-4 mb-4">
                        <h1 className="text-4xl font-bold tracking-tight text-zinc-100">
                            Elérhetőség
                        </h1>
                        <div className="flex-grow h-1 bg-gradient-to-r from-zinc-700 to-zinc-900"></div>
                    </div>
                    <div className="w-20 h-1 bg-zinc-600"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 h-full items-stretch">
                    <ContactInfo />
                    <div className="order-3 lg:order-2">
                        <h2 className="text-2xl font-semibold mb-4 text-zinc-100">Műterem</h2>
                        <div className="space-y-2 text-zinc-300">
                            <p>Bercsényi Kollégium 5.em.</p>
                            <p>Budapest, 1117</p>
                            <p>Bercsényi utca 28-30</p>
                        </div>
                    </div>
                    <div className="order-2 lg:order-2">
                        <Form />
                    </div>
                    <Link className="space-y-8 h-full order-4 lg:order-4" href={"https://maps.app.goo.gl/bhmBaitSa5hAVXu69"} target="_blank">
                        <Map />
                    </Link>
                </div>
            </div>
        </div>
    )
}