'use client'

import React from "react"
import ContactInfo from "@/app/(app)/Components/ContactInfo"
import Link from "next/link";

import dynamic from 'next/dynamic';
import Form from "@/app/(app)/Components/Form";
import PageTitle from "@/app/(app)/Components/PageTitle";

// Dinamikus importálás: térkép csak a böngészőben jelenik meg
const Map = dynamic(() => import('@/app/(app)/Components/Map'), { ssr: false });

export default function Page() {
    return (
        <>
        <PageTitle title={"Kapcsolat"} />
        <div className="min-h-screen text-zinc-100 py-12 relative overflow-hidden">

                <div className="grid grid-rows-[auto] lg:grid-cols-2 gap-12 relative z-10 h-full items-stretch">
                    <div className="h-auto">
                        <ContactInfo />
                    </div>
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
                    <div className="order-4 lg:order-4 w-full h-64 lg:h-auto">
                        <Link href={"https://maps.app.goo.gl/bhmBaitSa5hAVXu69"} target="_blank">
                            <Map />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}