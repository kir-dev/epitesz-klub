import type { CollectionConfig } from 'payload'

export const Events: CollectionConfig = {
  slug: 'events',
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
      name: 'típus',
      label: 'Típus',
      type: 'select',
        options: [
            {
            label: 'Bejárások',
            value: 'bejarasok',
            },
            {
            label: 'Előadások',
            value: 'eloadasok',
            },
            {
            label: 'Kirándulások',
            value: 'kirandulasok',
            },
            {
            label: 'Pályázatok',
            value: 'palyazatok',
            },
            {
            label: 'Budapest100',
            value: 'budapest100',
            },
            {
            label: 'Piknik',
            value: 'piknik',
            },
            {
            label: 'Workshopok, kurzusok',
            value: 'workshopok, kurzusok',
            },
            {
            label: 'Építő- és felmérőtáborok',
            value: 'epito- es felmerotaborok',
            },
        ],
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
      type: 'text',
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