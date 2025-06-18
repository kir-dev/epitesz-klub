import React from "react";
import { getPayload } from "payload";
import config from "@payload-config";
import PageTitle from "@/app/(app)/Components/PageTitle";
import ProjectGroups from "@/app/(app)/Components/projects/project-groups";

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
