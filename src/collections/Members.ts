import type {CollectionConfig} from 'payload'

export const Members: CollectionConfig = {
    slug: 'members',
    admin: {
        useAsTitle: 'email',
    },
    fields: [
        {
            name: 'email',
            label: 'Email',
            type: 'email',
            required: true,
            unique: true,
        },
        {
            name: 'name',
            label: 'Name',
            type: 'text',
            required: true,
        },
        {
            name: 'role',
            label: 'Role',
            type: 'select',
            options: [
                {
                    label: 'Elnök',
                    value: 'elnok',
                },
                {
                    label: 'Általános alelnök',
                    value: 'altalanos_alelnok',
                },
                {
                    label: 'Külkapcsolati alelnök',
                    value: 'kulkapcsolati_alelnok',
                },
                {
                    label: 'PR alelnök',
                    value: 'pr_alelnok',
                },
                {
                    label: 'Gazdasági alelnök',
                    value: 'gazdasagi_alelnok',
                },
                {
                    label: 'Tag',
                    value: 'tag',
                }
            ],
            defaultValue: 'tag',
            required: true,
        },
        {
            name: 'profileImage',
            label: 'Profile Image',
            type: 'upload',
            relationTo: 'media',
            required: true,
        }
    ],
}
