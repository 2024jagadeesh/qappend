import {defineField, defineType} from 'sanity'

export const faqType = defineType({
  name: 'faqSection',
  title: 'FAQ Section',
  type: 'object',

  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow',
      type: 'string',
      initialValue: 'FAQ',
    }),

    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Answers, straight.',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),

    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      initialValue: 'Ask a specialist',
    }),

    defineField({
      name: 'buttonAction',
      title: 'Button Action',
      type: 'string',
      initialValue: 'modal',
    }),

    defineField({
      name: 'items',
      title: 'FAQ Items',
      type: 'array',
      of: [
        defineField({
          name: 'item',
          title: 'FAQ Item',
          type: 'object',
          fields: [
            defineField({
              name: 'question',
              title: 'Question',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'answer',
              title: 'Answer',
              type: 'text',
              rows: 5,
              validation: (Rule) => Rule.required(),
            }),
          ],

          preview: {
            select: {
              title: 'question',
              subtitle: 'answer',
            },
          },
        }),
      ],
      validation: (Rule) => Rule.min(1),
    }),
  ],

  preview: {
    select: {
      title: 'heading',
      subtitle: 'eyebrow',
    },
  },
})
