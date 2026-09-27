import {defineField, defineType} from 'sanity'

export const challengeBoxesType = defineType({
  name: 'challengeBoxes',
  title: 'Challenge Boxes',
  type: 'object',

  fields: [
    defineField({
      name: 'items',
      title: 'Challenge Items',
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
                title: title || 'Challenge',
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
        title: 'Challenge Boxes',
        subtitle: `${items?.length || 0} challenges`,
      }
    },
  },
})
