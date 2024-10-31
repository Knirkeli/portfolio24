// schemas/imagesLink.ts

import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'imagesLink',
    title: 'Images Link',
    type: 'document',
    fields: [
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: Rule => Rule.required().error('Image is required'),
        }),
        defineField({
            name: 'alt',
            title: 'Alt Text',
            type: 'string',
            validation: Rule => Rule.required().error('Alt text is required'),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'alt', // Automatically generate the slug from the alt text
                maxLength: 96,
            },
            validation: Rule => Rule.required().error('Slug is required'),
        }),
        defineField({
            name: 'link',
            title: 'Link',
            type: 'url',
            validation: Rule => Rule.required().error('Link is required'),
        }),
    ],
});