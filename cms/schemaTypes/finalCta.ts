import {defineField, defineType} from 'sanity'

export const finalCtaType = defineType({
  name: 'finalCta',
  title: 'Final CTA',
  type: 'object',

  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Your CRM deserves a',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'headingHighlight',
      title: 'Heading Highlight',
      description: 'Highlighted part of the heading.',
      type: 'string',
      initialValue: 'cleaner',
    }),

    defineField({
      name: 'headingEnding',
      title: 'Heading Ending',
      type: 'string',
      initialValue: 'truth.',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      initialValue:
        "Request a free data audit. We'll show you exactly what's missing, what's wrong, and what verified completeness would unlock for your team.",
    }),

    defineField({
      name: 'buttons',
      title: 'CTA Buttons',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'text',
              title: 'Button Text',
              type: 'string',
            }),

            defineField({
              name: 'link',
              title: 'Button Link',
              type: 'string',
              initialValue: '#',
            }),

            defineField({
              name: 'style',
              title: 'Button Style',
              type: 'string',
              options: {
                list: [
                  {
                    title: 'Primary',
                    value: 'primary',
                  },
                  {
                    title: 'Ghost',
                    value: 'ghost',
                  },
                ],
                layout: 'radio',
              },
              initialValue: 'primary',
            }),
          ],

          preview: {
            select: {
              title: 'text',
              style: 'style',
            },

            prepare({title, style}) {
              return {
                title: title || 'CTA Button',
                subtitle: style || 'primary',
              }
            },
          },
        },
      ],

      initialValue: [
        {
          _key: 'final-button-1',
          text: 'Request free audit',
          link: '#',
          style: 'primary',
        },
        {
          _key: 'final-button-2',
          text: 'Get sample data',
          link: '#',
          style: 'ghost',
        },
        {
          _key: 'final-button-3',
          text: 'Speak with a specialist',
          link: '#',
          style: 'ghost',
        },
      ],
    }),
  ],

  preview: {
    select: {
      heading: 'heading',
    },

    prepare({heading}) {
      return {
        title: 'Final CTA',
        subtitle: heading || 'Final Call to Action',
      }
    },
  },
})
