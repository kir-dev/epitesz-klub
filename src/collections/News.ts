import type {CollectionConfig} from 'payload'

export const News: CollectionConfig = {
            slug: 'news',
            admin: {
                useAsTitle: 'date',
                description: 'Ezek a hírek lesznek megjelenítve a főoldalon.',
            },
            fields: [
                {
                    name: "title",
                    label: "Cím",
                    type: "text",
                    required: true,
                },
                {
                    name: 'date',
                    label: 'Dátum',
                    type: 'date',
                    required: true,
                },
                {
                    name: 'picture',
                    label: 'Kép',
                    type: 'upload',
                    relationTo: 'media',
                    maxDepth: 1,
                },
                {
                    name: 'shortDescription',
                    label: 'Rövid Leírás',
                    type: 'textarea',
                    required: true,
                    maxLength: 420,
                },
                {
                    name: 'Description',
                    label: 'Leírás',
                    type: 'textarea',
                    required: true,
                }
            ],
        }