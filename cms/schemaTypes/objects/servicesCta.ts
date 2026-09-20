import {defineField, defineType} from 'sanity'

export const servicesCtaType = defineType({
  name: 'servicesCta',
  title: 'Services — CTA',
  type: 'object',

  fields: [
    defineField({
      name: 'tag',
      title: 'Tag',
      type: 'string',
      initialValue: 'Free sample audit',
    }),

    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Not sure which fields',
    }),

    defineField({
      name: 'headingHighlight',
      title: 'Heading Highlight',
      type: 'string',
      initialValue: "you're missing?",
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),

    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      initialValue: 'Request free audit',
    }),

    defineField({
      name: 'buttonLink',
      title: 'Button Link',
      type: 'url',
    }),

    defineField({
      name: 'variant',
      title: 'CTA Style',
      type: 'string',
      options: {
        list: [
          {
            title: 'Default',
            value: 'default',
          },
          {
            title: 'Green / Full Width',
            value: 'green',
          },
        ],
        layout: 'radio',
      },
      initialValue: 'default',
    }),

    defineField({
      name: 'screenLabel',
      title: 'Screen Label',
      type: 'string',
      initialValue: 'Services · CTA',
    }),
  ],

  preview: {
    select: {
      heading: 'heading',
      highlight: 'headingHighlight',
      tag: 'tag',
      variant: 'variant',
    },

    prepare({heading, highlight, tag, variant}) {
      return {
        title: 'Services — CTA',
        subtitle: `${heading || ''} ${highlight || ''} — ${tag || 'CTA'} (${variant || 'default'})`,
      }
    },
  },
})
