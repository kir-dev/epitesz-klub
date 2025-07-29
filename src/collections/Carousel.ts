import type { CollectionConfig } from "payload";

export const Carousel: CollectionConfig = {
  slug: "carousel",
  admin: {
    description: "Képek, amelyek megjelennek a képnézegetőbe.",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "picture",
      label: "Kép",
      type: "upload",
      relationTo: "media",
      maxDepth: 1,
      required: true,
    },
    {
      name: "event",
      label: "Esemény vagy Projekt",
      type: "relationship",
      relationTo: "events",
    },
  ],
};
