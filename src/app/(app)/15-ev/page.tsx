import Timeline from "@/app/(app)/Components/Timeline";
import {getPayload} from "payload";
import config from "@payload-config";

export default async function Home() {
    const payload = await getPayload({
        config,
    });

    const events = await payload.find({
        collection: "events",
        where: {
            mainEvent: {
                equals: true
            }
        },
        sort: 'date'
    });

    return (
        <main className="bg-gray-900 min-h-screen">
            <Timeline events={events.docs || []}/>
        </main>
    )
}