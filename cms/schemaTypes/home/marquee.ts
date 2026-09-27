import {defineType, defineField} from 'sanity'

export const marqueeType = defineType({
  name: 'marquee',
  title: 'Marquee',
  type: 'object',

  fields: [
    defineField({
      name: 'items',
      title: 'Marquee Items',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      initialValue: [
        'Salesforce-ready',
        'HubSpot',
        'Marketo',
        'Outreach',
        'Pardot',
        'Snowflake',
        'Segment',
        'Clay',
        'Apollo',
      ],
    }),
  ],

  preview: {
    select: {
      items: 'items',
    },

    prepare({items}) {
      const count = items?.length ?? 0

      return {
        title: 'Marquee',
        subtitle: `${count} items`,
      }
    },
  },
})
