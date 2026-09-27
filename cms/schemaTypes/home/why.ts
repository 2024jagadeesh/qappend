import {defineField, defineType} from 'sanity'

export const whyType = defineType({
  name: 'why',
  title: 'Why QuickAppend',
  type: 'object',

  fields: [
    defineField({
      name: 'tag',
      title: 'Tag',
      type: 'string',
      initialValue: 'Why QuickAppend',
    }),

    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Built to keep you ahead.',
    }),

    defineField({
      name: 'headingHighlight',
      title: 'Heading Highlight',
      description: 'Highlighted/italic part of the heading.',
      type: 'string',
      initialValue: 'ahead',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      initialValue:
        'We get hired for the accuracy and the speed. We get kept for the strategic partnership.',
    }),

    defineField({
      name: 'items',
      title: 'Why Items',
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
              name: 'title',
              title: 'Title',
              type: 'string',
            }),

            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
            }),

            defineField({
              name: 'color',
              title: 'Accent Color',
              type: 'string',
              description: 'CSS color used for this item.',
            }),
          ],

          preview: {
            select: {
              number: 'number',
              title: 'title',
            },

            prepare({number, title}) {
              return {
                title: `${number ?? ''} ${title ?? 'Why item'}`,
                subtitle: 'Why QuickAppend item',
              }
            },
          },
        },
      ],

      initialValue: [
        {
          _key: 'why-1',
          number: '/ 01',
          title: '98% accuracy standard',
          description:
            'Every project passes a layered verification workflow. Nothing leaves until it meets the bar.',
          color: '#1e40af',
        },
        {
          _key: 'why-2',
          number: '/ 02',
          title: '72-hour typical turnaround',
          description:
            'Transparent timelines, milestone updates, and no opaque "we\'ll get back to you" cycles.',
          color: '#9f1239',
        },
        {
          _key: 'why-3',
          number: '/ 03',
          title: 'Tailored to your ICP',
          description:
            'Strategies are built around your industry, go-to-market, and the specific shape of your funnel.',
          color: '#146b6b',
        },
        {
          _key: 'why-4',
          number: '/ 04',
          title: 'CRM-native delivery',
          description:
            'Schema mapped to your Salesforce, HubSpot, Marketo, or warehouse. No janky CSV reformatting.',
          color: '#b8860b',
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
        title: 'Why QuickAppend',
        subtitle: `${tag ?? ''} — ${heading ?? ''}`,
      }
    },
  },
})
