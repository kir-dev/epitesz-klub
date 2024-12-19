import { getPayload } from "payload";
import config from "@payload-config";
import CategoryEvents from "@/app/(app)/Components/projects/category";

type PageProps = {
    params: Promise<{ id: string }>;
};

export default async function CategoryEventsPage(context: PageProps) {
    const { id } = await context.params;
    console.log(id);
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
    console.log(events.docs);

    return (
        <CategoryEvents events={events.docs} />
    );
}