import {defineField, defineType} from 'sanity'

export const processType = defineType({
  name: 'process',
  title: 'Process',
  type: 'object',

  fields: [
    defineField({
      name: 'tag',
      title: 'Tag',
      type: 'string',
      initialValue: 'The Process',
    }),

    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Eight steps.',
    }),

    defineField({
      name: 'headingHighlight',
      title: 'Heading Highlight',
      type: 'string',
      initialValue: 'One',
    }),

    defineField({
      name: 'headingSuffix',
      title: 'Heading Suffix',
      type: 'string',
      initialValue: 'clean handoff.',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      initialValue:
        'Watch a batch of raw records travel the pipeline, getting cleaned, appended, enriched, profiled, and verified, until it lands complete in your CRM. Most projects ship in 72 hours.',
    }),

    defineField({
      name: 'steps',
      title: 'Process Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Step Title',
              type: 'string',
            }),

            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
            }),

            defineField({
              name: 'label',
              title: 'Step Label',
              type: 'string',
            }),
          ],

          preview: {
            select: {
              title: 'title',
              subtitle: 'label',
            },
          },
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: 'heading',
      highlight: 'headingHighlight',
    },

    prepare({title, highlight}) {
      return {
        title: 'Process',
        subtitle: `${title || ''} ${highlight || ''}`.trim(),
      }
    },
  },
})
