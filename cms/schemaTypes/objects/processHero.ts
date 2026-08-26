import {defineField, defineType} from 'sanity'

export const processHeroType = defineType({
  name: 'processHero',
  title: 'Process Hero',
  type: 'object',

  fields: [
    defineField({
      name: 'breadcrumbLabel',
      title: 'Breadcrumb Label',
      type: 'string',
      initialValue: 'Process',
    }),

    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'From raw list to',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'headingHighlight',
      title: 'Heading Highlight',
      type: 'string',
      initialValue: 'revenue-ready',
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
  ],

  preview: {
    select: {
      heading: 'heading',
      highlight: 'headingHighlight',
      breadcrumb: 'breadcrumbLabel',
    },

    prepare({heading, highlight, breadcrumb}) {
      return {
        title: `Process Hero — ${heading || 'From raw list to'}${highlight ? ` ${highlight}` : ''}`,
        subtitle: breadcrumb || 'Process',
      }
    },
  },
})
