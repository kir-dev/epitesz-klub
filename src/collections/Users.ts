import type {CollectionConfig} from 'payload'

export const Users: CollectionConfig = {
    slug: 'users',
    admin: {
        useAsTitle: 'email',
    },
    auth: true,
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
                    label: 'Admin',
                    value: 'admin',
                },
                {
                    label: 'User',
                    value: 'user',
                },
            ],
            defaultValue: 'user',
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
