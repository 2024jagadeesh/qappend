import {defineType, defineField} from 'sanity'

export const heroType = defineType({
  name: 'hero',
  title: 'Hero',
  type: 'object',

  fields: [
    defineField({
      name: 'badge',
      title: 'Badge',
      type: 'string',
      initialValue: 'Trusted by 1,400+ B2B revenue teams',
    }),

    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'B2B contact',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'headingHighlight',
      title: 'Heading Highlight',
      description: 'The highlighted italic/gold part of the heading.',
      type: 'string',
      initialValue: 'records.',
    }),

    defineField({
      name: 'rotatingWords',
      title: 'Rotating Words',
      description: 'Words displayed one after another in the Hero.',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      initialValue: ['Completed.', 'Verified.', 'Validated.', 'Appended.', 'Enriched.'],
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      initialValue:
        'Get verified emails, direct dials, titles, and firmographics with AI-powered Data Appending, Enrichment, Profiling, and Cleansing services.',
    }),

    defineField({
      name: 'primaryButton',
      title: 'Primary Button',
      type: 'object',
      fields: [
        defineField({
          name: 'text',
          title: 'Button Text',
          type: 'string',
          initialValue: 'Request free audit',
        }),

        defineField({
          name: 'link',
          title: 'Button Link',
          type: 'string',
          initialValue: '#',
        }),
      ],
    }),

    defineField({
      name: 'secondaryButton',
      title: 'Secondary Button',
      type: 'object',
      fields: [
        defineField({
          name: 'text',
          title: 'Button Text',
          type: 'string',
          initialValue: 'See live demo',
        }),

        defineField({
          name: 'link',
          title: 'Button Link',
          type: 'string',
          initialValue: '#demo',
        }),
      ],
    }),

    defineField({
      name: 'finePrint',
      title: 'Fine Print',
      type: 'string',
      initialValue: 'Free 100-record sample · No contract · Results in 72 hours',
    }),

    defineField({
      name: 'trustLabel',
      title: 'Trust Label',
      type: 'string',
      initialValue: 'Writes back into',
    }),

    defineField({
      name: 'trustItems',
      title: 'Trust Items',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      initialValue: ['Salesforce', 'HubSpot', 'Marketo', 'Outreach', 'Snowflake'],
    }),
  ],

  preview: {
    select: {
      title: 'heading',
      badge: 'badge',
    },

    prepare({title, badge}) {
      return {
        title: `Homepage Hero — ${title || 'Hero'}`,
        subtitle: badge || 'Homepage Hero',
      }
    },
  },
})
