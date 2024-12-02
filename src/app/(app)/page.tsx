import config from "@payload-config";
import {getPayload} from "payload";
import NavBar from "@/app/(app)/Components/navBar";

export default async function Home() {

    const payload = await getPayload({
        config
    })

    const data = await payload.find({
        collection: 'media'
    })

    return (
        <><NavBar/>
            <div
                className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                <h1>Építész Klub</h1>
                {data.docs.map((doc, i) => (
                    <img key={i} src={doc.url ? doc.url : ""} alt={doc.alt}></img>
                ))}
            </div>
        </>
    );
}
