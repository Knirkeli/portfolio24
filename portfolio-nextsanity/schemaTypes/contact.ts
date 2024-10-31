import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'contact',
    title: 'Contact',
    type: 'document',
    fields: [
        defineField({
            name: 'phone',
            title: 'Phone',
            type: 'string',
            validation: Rule => Rule.required().error('Phone number is required'),
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: Rule => Rule.required().email().error('Valid email is required'),
        }),
        defineField({
            name: 'github',
            title: 'GitHub',
            type: 'url',
            validation: Rule => Rule.required().uri({ allowRelative: true }).error('GitHub URL is required'),
        }),
        defineField({
            name: 'linkedin',
            title: 'LinkedIn',
            type: 'url',
            validation: Rule => Rule.required().uri({ allowRelative: true }).error('LinkedIn URL is required'),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: Rule => Rule.required().error('Description is required'),
        }),
        defineField({
            name: 'contactPhoto',
            title: 'Contact Photo',
            type: 'image',
            description: 'photo on the contact page.',
            options: {
                hotspot: true,
            },
        }),
    ],
});