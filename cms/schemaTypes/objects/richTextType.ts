import {defineField, defineType} from 'sanity'

export const richTextType = defineType({
  name: 'richText',
  title: 'Rich Text',
  type: 'object',

  fields: [
    defineField({
      name: 'tag',
      title: 'Tag',
      type: 'string',
    }),

    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),

    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    }),

    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
    }),

    defineField({
      name: 'buttonLink',
      title: 'Button Link',
      type: 'string',
    }),
  ],
})
