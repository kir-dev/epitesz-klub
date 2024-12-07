import config from "@payload-config";
import {getPayload} from "payload";
import Footer from "@/app/(app)/Components/Footer";
import ProjectGroups from "@/app/(app)/Components/Project-groups";

export default async function Home() {

    const payload = await getPayload({
        config
    })

    const data = await payload.find({
        collection: 'categories',
    })

    return (
        <>
            <div>
                <ProjectGroups categories={data.docs}/>
            </div>
            <div>
                <Footer/>
            </div>
        </>
    );
}
