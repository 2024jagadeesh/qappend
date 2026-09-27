import {defineField, defineType} from 'sanity'

export const comparisonChartType = defineType({
  name: 'comparisonChart',
  title: 'Comparison Chart',
  type: 'object',

  fields: [
    defineField({
      name: 'title',
      title: 'Chart Title',
      type: 'string',
    }),

    defineField({
      name: 'items',
      title: 'Comparison Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
            }),

            defineField({
              name: 'prior',
              title: 'Prior Quarter',
              type: 'number',
            }),

            defineField({
              name: 'current',
              title: 'This Quarter',
              type: 'number',
            }),

            defineField({
              name: 'currentDisplay',
              title: 'Current Display',
              type: 'string',
              description: 'Example: 3×, +61%, 2.2×',
            }),
          ],

          preview: {
            select: {
              label: 'label',
              currentDisplay: 'currentDisplay',
            },
            prepare({label, currentDisplay}) {
              return {
                title: label || 'Comparison',
                subtitle: currentDisplay || '',
              }
            },
          },
        },
      ],
    }),

    defineField({
      name: 'note',
      title: 'Chart Note',
      type: 'string',
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: title || 'Comparison Chart',
      }
    },
  },
})
