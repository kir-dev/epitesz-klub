import config from "@payload-config";
import {getPayload} from "payload";
import {MyCarousel} from "./Components/Carousel";
import {Media} from "@/payload-types";
import StrafingLine from "@/app/(app)/Components/StrafingLine";

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
            actual: {
                equals: true
            }
        },
        sort: '-date',
        limit: 10
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
            <div className="contents">
                <h1>Építész Klub</h1>
                <StrafingLine events={events.docs}/>
            </div>
        </>
    );
}