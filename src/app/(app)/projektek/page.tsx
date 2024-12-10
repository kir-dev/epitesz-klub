import React from "react";
import ProjectGroups from "./Components/project-groups";
import { getPayload } from "payload";
import config from "@payload-config";
import { Category } from "@/payload-types";

interface ProjectsPageProps {
    setSelectedCategory: (category: Category) => void;
}

export default async function ProjectsPage(props: ProjectsPageProps) {
    // Payload adatlekérés
    const payload = await getPayload({ config });
    const { docs: categories } = await payload.find({
        collection: "categories",
    });

    return (
        <div>
            <ProjectGroups categories={categories} setSelectedCategory={props.setSelectedCategory} /> 
        </div>
    );
}