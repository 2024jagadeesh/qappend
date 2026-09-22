import {defineField, defineType} from 'sanity'

export const resultBoxesType = defineType({
  name: 'resultBoxes',
  title: 'Result Boxes',
  type: 'object',

  fields: [
    defineField({
      name: 'items',
      title: 'Result Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),

            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 4,
            }),
          ],

          preview: {
            select: {
              title: 'title',
              description: 'description',
            },

            prepare({title, description}) {
              return {
                title: title || 'Result',
                subtitle: description || '',
              }
            },
          },
        },
      ],
    }),
  ],

  preview: {
    select: {
      items: 'items',
    },

    prepare({items}) {
      return {
        title: 'Result Boxes',
        subtitle: `${items?.length || 0} results`,
      }
    },
  },
})
