import AboutUs from "@/app/(app)/Components/about-page";
import {getPayload} from "payload";
import config from "@payload-config";

export default async function AboutPage(){
    const payload = await getPayload({ config });
    const { docs: publications } = await payload.find({
        collection: "publications",
        sort: '-date',
        limit: 1,
    });

    return (
        <AboutUs link={publications[0]}/>
    )
}