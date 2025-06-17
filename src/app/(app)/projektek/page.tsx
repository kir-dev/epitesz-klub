import React from "react";
import ProjectGroups from "../Components/projects/project-groups";
import { getPayload } from "payload";
import config from "@payload-config";
import PageTitle from "@/app/(app)/Components/PageTitle";

export default async function ProjectsPage() {
  // Payload adatlekérés
  const payload = await getPayload({ config });
  const { docs: categories } = await payload.find({
    collection: "categories",
  });
  categories.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  return (
    <>
      <PageTitle title={"Projektek"} />
      <ProjectGroups categories={categories} />
    </>
  );
}
