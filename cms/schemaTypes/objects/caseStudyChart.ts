import {defineField, defineType} from 'sanity'

export const caseStudyChartType = defineType({
  name: 'caseStudyChart',
  title: 'Case Study Chart',
  type: 'object',

  fields: [
    defineField({
      name: 'title',
      title: 'Chart Title',
      type: 'string',
    }),

    defineField({
      name: 'items',
      title: 'Chart Items',
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
              name: 'percentage',
              title: 'Percentage',
              type: 'number',
            }),

            defineField({
              name: 'value',
              title: 'Value',
              type: 'string',
            }),
          ],

          preview: {
            select: {
              label: 'label',
              percentage: 'percentage',
              value: 'value',
            },

            prepare({label, percentage, value}) {
              return {
                title: label || 'Chart Item',
                subtitle: `${percentage || 0}% · ${value || ''}`,
              }
            },
          },
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },

    prepare({title}) {
      return {
        title: title || 'Case Study Chart',
      }
    },
  },
})
