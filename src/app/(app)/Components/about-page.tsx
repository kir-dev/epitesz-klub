import React from "react";
import Image from "next/image";
import {Media} from "@/payload-types";
import PageTitle from "@/app/(app)/Components/PageTitle";

export default function AboutUs() {
    return (
        <div>
            <PageTitle title={"Rólunk"} />
            <div className="flex flex-col md:flex-row justify-between gap-8 p-8 min-h-screen">
                {/* Text Section */}
                <div className="md:w-1/2">
                    <h1 className="text-3xl font-bold mb-4">Rólunk</h1>
                    <div className="w-16 h-1 bg-blue-500 mb-6"></div>
                    <p className="text-lg leading-relaxed mb-6">
                        Az Építészettel, annak „kemény magvával” és perifériájával,
                        folyamatával és aktualitásaival foglalkozunk. Szerepvállalásunk a
                        Műegyetem építészhallgatói és az építész társadalom közti kapcsolat
                        megteremtése, a hallgatók képviselete, a kommunikáció és együttműködés
                        segítése. Aktív részesei vagyunk a szakmai közéletnek; előadásokat,
                        épületbejárásokat, workshopokat, építőtáborokat szervezünk.
                        Vendégeink nem csak építészek, sok más szakemberrel, művésszel is
                        beszélgetünk, akik az építészet határterületein tevékenykednek.
                        Élménnyé tesszük az építészetet. Az idei kiadványunk letölthető pdf
                        formátumban,{" "}
                        <a
                            href="#"
                            className="text-blue-500 underline hover:text-blue-700"
                        >
                            itt
                        </a>
                        .
                    </p>
                </div>

                {/* Image Section */}
                <div className="md:w-1/2">
                    <Image
                        src="/rolunk.jpg"
                        alt="Artwork"
                        width={600}
                        height={400}
                        className="w-full rounded-lg shadow-lg"
                    />
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-8 p-8 min-h-screen">
                <div className="md:w-1/2">
                    <h1 className="text-3xl font-bold mb-4">Műterem</h1>
                    <div className="w-16 h-1 bg-blue-500 mb-6"></div>
                    <p className="text-lg leading-relaxed mb-6">
                        A Bercsényi Építész Kollégium 5. emeletén létrehoztuk az építészhallgatók Műtermét, ami
                        közösségi
                        műhelyként
                        helyet ad, lehetőséget teremt a hallgatók személyes fejlődésére és önképzésére. Jó együtt
                        dolgozni, és
                        ez
                        közösséggé formál minket.
                        Az Építész Klub a Bercsényi Kollégium 5. emeleti közösségi helyiségéből az évek során Műtermet
                        hoz létre
                        ami
                        segíti a klub sokszínű tevékenységét, helyet és arculatot ad az itt folyó szakmai munkának. Ez a
                        helyiség
                        gyűléseink, workshopjaink, kurzusaink és a projektjeinkhez kapcsolódó műhelymunka helyszíne,
                        ugyanakkor
                        nyílt közösségi tér is. Tárt ajtóval várjuk a munkateret és társaságot kereső kollégistákat is.
                        Szeretnénk,
                        hogy működésében ugyanaz a nyitottság jellemezze, mint ami az Építész Klubot is.
                    </p>
                </div>

                {/* Image Section */
                }
                <div className="md:w-1/2">
                    <Image
                        src="/rolunk.jpg"
                        alt="Artwork"
                        width={600}
                        height={400}
                        className="w-full rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};