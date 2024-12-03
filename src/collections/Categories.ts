import type { CollectionConfig } from 'payload';

export const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'név',
  },
  fields: [
    {
      name: 'név',
      label: 'Név',
      type: 'text',
      required: true,
    },
    {
      name: 'kep',
      label: 'Kép',
      type: 'upload',
        relationTo: 'media',
      required: true
    },
    {
      name: 'icon',
      label: 'Icon',
      type: 'upload',
        relationTo: 'media',
      required: false
    },
  ],
};