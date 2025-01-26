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
        },
        sort: '-date'
    });

    let categoryName = "Category";
    const category = await payload.find({
        collection: "categories",
        where: {
            id: {
                equals: id
            }
        }
    });
    categoryName = category.docs[0].name;
    if (events.docs.length === 0) {
        return (
            <div>
                <PageTitle title={categoryName}/>
                <p>No events found for this category</p>
            </div>
        );
    }

    return (
        <><PageTitle title={categoryName}/>
            <div>
                <CategoryEvents events={events.docs}/>
            </div>
        </>
    );
}