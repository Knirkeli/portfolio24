// import {defineField, defineType} from 'sanity'

// export default defineType({
//   name: 'post',
//   title: 'Post',
//   type: 'document',
//   fields: [
//     defineField({
//       name: 'title',
//       title: 'Title',
//       type: 'string',
//     }),
//     defineField({
//       name: 'slug',
//       title: 'Slug',
//       type: 'slug',
//       options: {
//         source: 'title',
//         maxLength: 96,
//       },
//     }),
//     defineField({
//       name: 'author',
//       title: 'Author',
//       type: 'reference',
//       to: {type: 'author'},
//     }),
//     defineField({
//       name: 'mainImage',
//       title: 'Main image',
//       type: 'image',
//       options: {
//         hotspot: true,
//       },
//     }),
//     defineField({
//       name: 'categories',
//       title: 'Categories',
//       type: 'array',
//       of: [{type: 'reference', to: {type: 'category'}}],
//     }),
//     defineField({
//       name: 'publishedAt',
//       title: 'Published at',
//       type: 'datetime',
//     }),
//     defineField({
//       name: 'body',
//       title: 'Body',
//       type: 'blockContent',
//     }),
//   ],

//   preview: {
//     select: {
//       title: 'title',
//       author: 'author.name',
//       media: 'mainImage',
//     },
//     prepare(selection) {
//       const {author} = selection
//       return {...selection, subtitle: author && `by ${author}`}
//     },
//   },
// })

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projectPost',
  title: 'Project Post',
  type: 'document',
  fields: [
    defineField({
      name: 'header',
      title: 'Header',
      type: 'string',
      description: 'The main title of the project post.',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'A unique identifier for the post, generated from the header.',
      options: {
        source: 'header',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A detailed description of the project.',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      description: 'Multiple images showcasing the project.',
      of: [{type: 'image', options: {hotspot: true}}],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      description: 'The category under which the project falls.',
      to: {type: 'category'},
    }),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      description: 'Links with icons to be used as references.',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'url',
              title: 'URL',
              type: 'url',
              description: 'The URL of the link.',
              validation: Rule => Rule.required().uri({allowRelative: true}),
            },
            {
              name: 'icon',
              title: 'Icon',
              type: 'image',
              description: 'An image to be used as the icon for the link.',
              options: {hotspot: true},
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'completionDate',
      title: 'Completion Date',
      type: 'date',
      description: 'The date when the project was completed.',
    }),
    defineField({
      name: 'inProgress',
      title: 'In Progress',
      type: 'boolean',
      description: 'Mark if the project is still in progress.',
    }),
  ],

  preview: {
    select: {
      title: 'header',
      media: 'images.0',
    },
  },
})