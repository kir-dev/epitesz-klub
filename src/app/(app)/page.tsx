import config from "@payload-config";
import {getPayload} from "payload";
import {MyCarousel} from "./Components/Carousel";
import {Media} from "@/payload-types";
import Timeline from "@/app/(app)/Components/Timeline";

export default async function Home() {
    const payload = await getPayload({
        config,
    });

    const media = await payload.find({
        collection: "media"
    });

    const events = await payload.find({
        collection: "events",
        where: {
            aktuális: {
                equals: true
            }
        }
    });

    const mediaData = {
        docs: media.docs.map((doc: Media) => ({
            url: doc.url ?? '',
            alt: doc.alt ?? ''
        }))
    };

    return (
        <>
            <MyCarousel data={mediaData}/>
            <div className="flex-grow">
                <h1>Építész Klub</h1>
                <Timeline events={events.docs}/>
            </div>
        </>
    );
}