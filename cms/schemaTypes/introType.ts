import {defineType, defineField} from 'sanity'

export const introType = defineType({
  name: 'intro',
  title: 'Intro / Pain Points',
  type: 'object',

  fields: [
    defineField({
      name: 'tag',
      title: 'Tag',
      type: 'string',
      initialValue: 'Pain points',
    }),

    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Modern GTM teams are',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'headingHighlight',
      title: 'Heading Highlight',
      description: 'The highlighted/italic part of the heading.',
      type: 'string',
      initialValue: 'drowning',
    }),

    defineField({
      name: 'headingEnd',
      title: 'Heading Ending',
      type: 'string',
      initialValue: 'in incomplete data.',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 5,
      initialValue:
        "Bad records don't just sit there. They tax every workflow they touch. Reps spend their morning chasing wrong numbers. Campaigns leak into spam folders. Forecasts get built on half-known accounts. QuickAppend rebuilds the foundation.",
    }),

    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      initialValue: 'Talk to a specialist',
    }),

    defineField({
      name: 'buttonLink',
      title: 'Button Link',
      type: 'string',
      initialValue: '#',
    }),

    defineField({
      name: 'symptomsLabel',
      title: 'Symptoms Label',
      type: 'string',
      initialValue: '↓ Symptoms we hear every week',
    }),

    defineField({
      name: 'challenges',
      title: 'Challenges',
      type: 'array',
      of: [
        {
          type: 'object',

          fields: [
            defineField({
              name: 'number',
              title: 'Number',
              type: 'string',
            }),

            defineField({
              name: 'name',
              title: 'Challenge',
              type: 'string',
            }),

            defineField({
              name: 'badge',
              title: 'Badge',
              type: 'string',
            }),

            defineField({
              name: 'color',
              title: 'Accent Color',
              type: 'string',
              description: 'CSS color used for the challenge accent.',
            }),
          ],

          preview: {
            select: {
              tag: 'tag',
              heading: 'heading',
              headingHighlight: 'headingHighlight',
              headingEnd: 'headingEnd',
            },

            prepare({tag, heading, headingHighlight, headingEnd}) {
              return {
                title: 'Intro / Pain Points',
                subtitle: `${tag ?? ''} — ${heading ?? ''} ${headingHighlight ?? ''} ${headingEnd ?? ''}`,
              }
            },
          },
        },
      ],

      initialValue: [
        {
          _key: 'challenge-1',
          number: '01',
          name: 'Incomplete CRM records',
          badge: '−42% reach',
          color: '#e11d48',
        },
        {
          _key: 'challenge-2',
          number: '02',
          name: 'Missing direct dials',
          badge: '−61% connect',
          color: '#2563eb',
        },
        {
          _key: 'challenge-3',
          number: '03',
          name: 'High email bounce rates',
          badge: '+18% bounce',
          color: '#d4a82c',
        },
        {
          _key: 'challenge-4',
          number: '04',
          name: 'Outdated company details',
          badge: 'stale ICP',
          color: '#7c3aed',
        },
        {
          _key: 'challenge-5',
          number: '05',
          name: 'No buyer intent visibility',
          badge: 'blind ABM',
          color: '#146b6b',
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
        title: 'Intro / Pain Points',
        subtitle: `${tag ?? ''} — ${heading ?? ''}`,
      }
    },
  },
})
