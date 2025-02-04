import {CollectionConfig} from "payload";

export const Publications: CollectionConfig = {
    slug: 'publications',
    admin: {
        useAsTitle: 'name',
    },
    upload: {
        staticDir: 'uploads/pdf',
        mimeTypes: ['application/pdf'],
    },
    fields: [
        {
            name: 'name',
            label: 'Név',
            type: 'text',
            required: true,
        },
        {
            name: 'date',
            label: 'Dátum',
            type: 'date',
            required: true,
        },
    ],
}