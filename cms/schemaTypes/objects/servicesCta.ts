import {defineField, defineType} from 'sanity'

export const servicesCtaType = defineType({
  name: 'servicesCta',
  title: 'Services — Closing CTA',
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
  ],

  preview: {
    select: {
      title: 'heading',
      subtitle: 'tag',
    },
  },
})
