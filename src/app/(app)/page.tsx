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
        collection: "media",
        where: {
            carousel: {
                equals: true
            }
        }
    });

    const news = await payload.find({
        collection: "news",
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
                <StrafingLine news={news.docs}/>
            </div>
        </>
    );
}