import type { CollectionConfig } from "payload";

export const Events: CollectionConfig = {
  slug: "events",
  admin: {
    useAsTitle: "title",
    description: "Ezek az események jelennek meg a projekteken belül.",
  },
  fields: [
    {
      name: "type",
      label: "Típus",
      type: "relationship",
      relationTo: "categories",
      required: false,
    },
    {
      name: "title",
      label: "Cím",
      type: "text",
      required: true,
    },
    {
      name: "date",
      label: "Dátum",
      type: "date",
      required: true,
    },
    {
      name: "picture",
      label: "Kép",
      type: "upload",
      relationTo: "media",
      maxDepth: 1,
      required: true,
    },
    {
      name: "description",
      label: "Leírás",
      type: "textarea",
      required: true,
    },
    {
      name: "mainEvent",
      label: "Főesemény",
      type: "checkbox",
      required: true,
    },
    {
      name: "actual",
      label: "Aktuális",
      type: "checkbox",
      required: true,
    },
  ],
};
