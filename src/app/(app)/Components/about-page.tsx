import React from "react";
import Image from "next/image";
import PageTitle from "@/app/(app)/Components/PageTitle";
import { Publication } from "@/payload-types";
import Link from "next/link";

interface AboutUsProps {
  link: Publication;
}

export default function AboutUs(props: AboutUsProps) {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-8 min-h-screen">
        {/* Text Section */}
        <div className="md:w-1/2">
          <PageTitle title={"Rólunk"} />
          <p className="text-lg leading-relaxed mb-6">
            Az Építészettel, annak „kemény magvával” és perifériájával,
            folyamatával és aktualitásaival foglalkozunk. Szerepvállalásunk a
            Műegyetem építészhallgatói és az építész társadalom közti kapcsolat
            megteremtése, a hallgatók képviselete, a kommunikáció és
            együttműködés segítése. Aktív részesei vagyunk a szakmai közéletnek;
            előadásokat, épületbejárásokat, workshopokat, építőtáborokat
            szervezünk. Vendégeink nem csak építészek, sok más szakemberrel,
            művésszel is beszélgetünk, akik az építészet határterületein
            tevékenykednek. Élménnyé tesszük az építészetet. Az idei kiadványunk
            letölthető pdf formátumban,{" "}
            <Link
              href={props.link?.url ? props.link.url : "#"}
              download={`${props.link?.name ? props.link.name : "#"}.pdf`}
              className="text-blue-500 underline hover:text-blue-700"
            >
              itt
            </Link>
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
      <div className="flex flex-col md:flex-row justify-between gap-8 min-h-screen">
        <div className="md:w-1/2">
          <PageTitle title={"Műterem"} />
          <p className="text-lg leading-relaxed mb-6">
            A Bercsényi Építész Kollégium 5. emeletén létrehoztuk az
            építészhallgatók Műtermét, ami közösségi műhelyként helyet ad,
            lehetőséget teremt a hallgatók személyes fejlődésére és önképzésére.
            Jó együtt dolgozni, és ez közösséggé formál minket. Az Építész Klub
            a Bercsényi Kollégium 5. emeleti közösségi helyiségéből az évek
            során Műtermet hoz létre ami segíti a klub sokszínű tevékenységét,
            helyet és arculatot ad az itt folyó szakmai munkának. Ez a helyiség
            gyűléseink, workshopjaink, kurzusaink és a projektjeinkhez
            kapcsolódó műhelymunka helyszíne, ugyanakkor nyílt közösségi tér is.
            Tárt ajtóval várjuk a munkateret és társaságot kereső kollégistákat
            is. Szeretnénk, hogy működésében ugyanaz a nyitottság jellemezze,
            mint ami az Építész Klubot is.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2">
          <Image
            src="/workshop.jpg"
            alt="Artwork"
            width={600}
            height={400}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </>
  );
}
