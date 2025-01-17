/*import { getPayload } from "payload";
import config from "@payload-config";*/
import AboutUs from "@/app/(app)/Components/about-page";

export default async function AboutPage(){
    /*const payload = await getPayload({ config });
    const artPic = await payload.find({
        collection: "media",
        where: {
            filename: {
                equals: 'artwork.jpg'
            }
        }
    });
    const workshopPic = await payload.find({
        collection: "media",
        where: {
            filename: {
                equals: 'workshop.jpg'
            }
        }
    });*/

    return (
        <AboutUs/>
    )
}