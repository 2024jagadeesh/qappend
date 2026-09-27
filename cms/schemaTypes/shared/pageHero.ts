import {defineField, defineType} from 'sanity'

export const pageHeroType = defineType({
  name: 'pageHero',
  title: 'Page Hero',
  type: 'object',

  fields: [
    defineField({
      name: 'breadcrumbLabel',
      title: 'Breadcrumb Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'headingHighlight',
      title: 'Heading Highlight',
      type: 'string',
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
  ],

  preview: {
    select: {
      heading: 'heading',
      highlight: 'headingHighlight',
      breadcrumb: 'breadcrumbLabel',
    },

    prepare({heading, highlight, breadcrumb}) {
      return {
        title: `Page Hero — ${heading || 'Untitled'}`,
        subtitle: highlight ? `${breadcrumb || 'Page'} · ${highlight}` : breadcrumb || 'Page Hero',
      }
    },
  },
})
