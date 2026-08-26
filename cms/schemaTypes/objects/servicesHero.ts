import {defineField, defineType} from 'sanity'

export const servicesHeroType = defineType({
  name: 'servicesHero',
  title: 'Services Hero',
  type: 'object',

  fields: [
    defineField({
      name: 'breadcrumbLabel',
      title: 'Breadcrumb Label',
      type: 'string',
      initialValue: 'Data Appending',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Complete the record,',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'headingHighlight',
      title: 'Heading Highlight',
      type: 'string',
      initialValue: 'field by field',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'ctaText',
      title: 'CTA Text',
      type: 'string',
      initialValue: 'Request free audit',
    }),

    defineField({
      name: 'background',
      title: 'Background',
      type: 'object',
      fields: [
        defineField({
          name: 'primary',
          title: 'Primary Color',
          type: 'string',
          initialValue: '#2f9757',
        }),

        defineField({
          name: 'secondary',
          title: 'Secondary Color',
          type: 'string',
          initialValue: '#1f6b3d',
        }),

        defineField({
          name: 'dark',
          title: 'Dark Color',
          type: 'string',
          initialValue: '#16512e',
        }),

        defineField({
          name: 'accent',
          title: 'Accent Color',
          type: 'string',
          initialValue: '#d4a82c',
        }),
      ],
    }),
  ],

  preview: {
    select: {
      heading: 'heading',
      highlight: 'headingHighlight',
      label: 'breadcrumbLabel',
    },

    prepare({heading, highlight, label}) {
      return {
        title: 'Services Hero',
        subtitle: `${heading || ''} ${highlight || ''} — ${label || 'Services'}`,
      }
    },
  },
})
