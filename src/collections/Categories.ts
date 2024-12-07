import type { CollectionConfig } from 'payload';

export const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      label: 'Név',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      label: 'Kép',
      type: 'upload',
        relationTo: 'media',
        maxDepth: 1,
      required: true
    },
    {
      name: 'icon',
      label: 'Icon',
      type: 'upload',
        relationTo: 'media',
        maxDepth: 1,
      required: false
    },
  ],
};