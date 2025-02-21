import type {CollectionConfig} from 'payload'

export const News: CollectionConfig = {
            slug: 'news',
            admin: {
                useAsTitle: 'date',
                description: 'Ezek a hírek lesznek megjelenítve a főoldalon.',
            },
            fields: [
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
                    name: 'description',
                    label: 'Leírás',
                    type: 'textarea',
                    required: true,
                    maxLength: 550,
                },
            ],
        }