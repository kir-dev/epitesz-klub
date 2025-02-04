import type {CollectionConfig} from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    description: 'Képek, amelyek a weboldalon megjelennek.',
    },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'carousel',
      label: 'Képnézegető',
      type: 'checkbox',
      required: true,
    },
  ],
  upload: true,
}
