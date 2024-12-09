import config from "@payload-config";
import {getPayload} from "payload";

export default async function Home() {

    const payload = await getPayload({
        config
    })

    const data = await payload.find({
        collection: 'media'
    })

    return (
        <>
            <div
                className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
                <h1>Építész Klub</h1>
                {data.docs.map((doc, i) => (
                    <img key={i} src={doc.url ? doc.url : ""} alt={doc.alt}></img>
                ))}
            </div>
        </>
    );
}
