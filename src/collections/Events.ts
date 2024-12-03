import type { CollectionConfig } from 'payload'

export const Events: CollectionConfig = {
  slug: 'events',
  admin: {
    useAsTitle: 'cím',
  },
  fields: [
    {
      name: 'típus',
      label: 'Típus',
      type: 'relationship',
      relationTo: 'categories',
      required: true,
    },
    {
      name: 'cím',
      label: 'Cím',
      type: 'text',
      required: true,
    },
    {
      name: 'dátum',
      label: 'Dátum',
      type: 'date',
      required: true,
    },
    {
      name: 'kép',
      label: 'Kép',
      type: 'upload',
        relationTo: 'media',
      required: true,
    },
    {
      name: 'leírás',
      label: 'Leírás',
      type: 'textarea',
      required: true,
    },
    {
      name: 'főesemény',
      label: 'Főesemény',
      type: 'checkbox',
      required: true,
    },
    {
      name: 'aktuális',
      label: 'Aktuális',
      type: 'checkbox',
      required: true,
    }
  ],
}