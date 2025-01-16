import {getPayload} from "payload";
import config from "@payload-config";
import CategoryEvents from "@/app/(app)/Components/projects/category";
import PageTitle from "@/app/(app)/Components/PageTitle";

type PageProps = {
    params: Promise<{ id: string }>;
};

export default async function CategoryEventsPage(context: PageProps) {
    const { id } = await context.params;
    if (id === "undefined") {
        return (
            <div>
                <h1>Category Events</h1>
                <p>No category selected</p>
            </div>
        );
    }
    const payload = await getPayload({ config });
    const events = await payload.find({
        collection: "events",
        where: {
            type: {
                equals: id
            }
        }
    });

    let categoryName = "Category";
    if (typeof events.docs[0].type !== 'number') {
        categoryName = events.docs[0].type.name;
    }

    return (
        <><PageTitle title={categoryName}/>
            <div>
                <CategoryEvents events={events.docs}/>
            </div>
        </>
    );
}