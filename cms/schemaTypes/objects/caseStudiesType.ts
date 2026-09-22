import {defineField, defineType} from 'sanity'

export const caseStudiesType = defineType({
  name: 'caseStudies',
  title: 'Case Studies',
  type: 'object',

  fields: [
    defineField({
      name: 'tag',
      title: 'Tag',
      type: 'string',
      initialValue: 'Customer outcomes',
    }),

    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Numbers, from',
    }),

    defineField({
      name: 'headingHighlight',
      title: 'Heading Highlight',
      type: 'string',
      initialValue: 'real',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      initialValue:
        'A snapshot of measurable impact across SaaS, services, and enterprise GTM teams.',
    }),

    defineField({
      name: 'relatedCaseStudies',
      title: 'Related Case Studies',
      type: 'array',

      of: [
        {
          type: 'reference',
          to: [{type: 'caseStudy'}],
        },
      ],

      validation: (Rule) => Rule.unique(),
    }),

    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      initialValue: 'Read full case studies',
    }),

    defineField({
      name: 'buttonLink',
      title: 'Button Link',
      type: 'string',
      initialValue: '/case-studies/',
    }),
  ],

  preview: {
    select: {
      title: 'heading',
      highlight: 'headingHighlight',
    },
    prepare({title, highlight}) {
      return {
        title: 'Case Studies',
        subtitle: `${title || ''} ${highlight || ''}`.trim(),
      }
    },
  },
})
