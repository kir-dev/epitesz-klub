import type {CollectionConfig} from 'payload'

export const Carousel: CollectionConfig = {
    slug: 'carousel',
    admin: {
        description: 'Képek, amelyek megjelennek a képnézegetőbe.',
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'alt',
            label: 'Kép alternatív szövege',
            type: 'text',
            required: true,
        },
    ],
    upload: true,
}