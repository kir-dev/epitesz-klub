import config from "@payload-config";
import {getPayload} from "payload";
import {MyCarousel} from "./Components/Carousel";
import 'flowbite/dist/flowbite.css';
import {Media} from "@/payload-types";

export default async function Home() {
    const payload = await getPayload({
        config,
    });

    const result = await payload.find({
        collection: "media"
    });

    const data = {
        docs: result.docs.map((doc: Media) => ({
            url: doc.url ?? '',
            alt: doc.alt ?? ''
        }))
    };

    return (
        <>
            <MyCarousel data={data}/>
            <div
                className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
                <h1>Építész Klub</h1>
            </div>
        </>
    );
}