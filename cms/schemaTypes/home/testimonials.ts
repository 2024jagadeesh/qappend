import {defineField, defineType} from 'sanity'

export const testimonialsType = defineType({
  name: 'testimonials',
  title: 'Testimonials',
  type: 'object',

  fields: [
    defineField({
      name: 'tag',
      title: 'Tag',
      type: 'string',
      initialValue: 'In their words',
    }),

    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'What clients actually say.',
    }),

    defineField({
      name: 'headingHighlight',
      title: 'Heading Highlight',
      type: 'string',
      initialValue: 'actually',
    }),

    defineField({
      name: 'items',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'stat',
              title: 'Statistic',
              type: 'string',
              description: 'Optional statistic shown on the featured testimonial.',
            }),

            defineField({
              name: 'quote',
              title: 'Quote',
              type: 'text',
              rows: 4,
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'author',
              title: 'Author',
              type: 'string',
            }),

            defineField({
              name: 'role',
              title: 'Company / Role',
              type: 'string',
            }),

            defineField({
              name: 'number',
              title: 'Number',
              type: 'string',
            }),

            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),

            defineField({
              name: 'caseStudyText',
              title: 'Case Study Button Text',
              type: 'string',
              initialValue: 'Read case study',
            }),

            defineField({
              name: 'caseStudyLink',
              title: 'Case Study Link',
              type: 'string',
            }),

            defineField({
              name: 'featured',
              title: 'Featured',
              type: 'boolean',
              initialValue: false,
            }),
          ],

          preview: {
            select: {
              quote: 'quote',
              author: 'author',
              featured: 'featured',
            },

            prepare({quote, author, featured}) {
              return {
                title: author || 'Testimonial',
                subtitle: `${featured ? 'Featured — ' : ''}${quote || ''}`,
              }
            },
          },
        },
      ],

      initialValue: [
        {
          _key: 'testimonial-1',
          stat: '8% → 39%',
          quote: 'Connect rate jumped from 8% to 39% in three weeks.',
          author: 'Director of Demand Gen',
          role: 'Enterprise SaaS',
          number: '/ 01',
          featured: true,
          caseStudyText: 'Read case study',
          caseStudyLink: '/case-study-abm/',
        },
        {
          _key: 'testimonial-2',
          quote: 'Turned our ABM from spray-and-pray into something sales defends in QBRs.',
          author: 'VP Marketing Ops',
          role: 'B2B Technology',
          number: '/ 02',
          featured: false,
        },
        {
          _key: 'testimonial-3',
          quote: 'Uncovered a whole division of an existing account. Pipeline in a week.',
          author: 'Head of RevOps',
          role: 'Mid-Market Services',
          number: '/ 03',
          featured: false,
        },
      ],
    }),
  ],

  preview: {
    select: {
      tag: 'tag',
      heading: 'heading',
    },

    prepare({tag, heading}) {
      return {
        title: 'Testimonials',
        subtitle: `${tag ?? ''} — ${heading ?? ''}`,
      }
    },
  },
})
