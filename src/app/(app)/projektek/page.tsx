import React from "react";
import ProjectGroups from "../Components/projects/project-groups";
import { getPayload } from "payload";
import config from "@payload-config";

export default async function ProjectsPage() {
    // Payload adatlekérés
    const payload = await getPayload({ config });
    const { docs: categories } = await payload.find({
        collection: "categories",
    });

    return (
        <div>
            <ProjectGroups categories={categories} /> 
        </div>
    );
}