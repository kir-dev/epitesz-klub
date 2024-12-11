import { getPayload } from "payload";
import config from "@payload-config";
import CategoryEvents from "@/app/(app)/projektek/Components/category"; 
import { Category } from "@/payload-types";

interface CategoryEventProps {
    selectedCategory: Category | null;
}

export default async function CategoryEventsPage(context) {
    console.log("Ok");

    const { id } = await context.params;
    console.log(id);
    {if (id === "undefined") {
        return (
            <div>
                <h1>Category Events</h1>
                <p>No category selected</p>
            </div>
        )
    }
    const payload = await getPayload({ config });
    const events = await payload.find({
        collection: "events",
        where: {
            típus: {
                equals: id
            }
        }
    });
    console.log(events.docs);

    return (
        <CategoryEvents events={events.docs} />
    )
}