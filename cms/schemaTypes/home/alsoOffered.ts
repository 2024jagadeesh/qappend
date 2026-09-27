import {defineField, defineType} from 'sanity'

export const alsoOfferedType = defineType({
  name: 'alsoOffered',
  title: 'Also Offered',
  type: 'object',

  fields: [
    defineField({
      name: 'label',
      title: 'Section Label',
      type: 'string',
      initialValue: 'Also offered',
    }),

    defineField({
      name: 'items',
      title: 'Services',
      type: 'array',
      of: [
        {
          type: 'object',

          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'category',
              title: 'Category',
              type: 'string',
            }),

            defineField({
              name: 'buttonText',
              title: 'Button Text',
              type: 'string',
              initialValue: 'Talk to a specialist',
            }),

            defineField({
              name: 'link',
              title: 'Button Link',
              type: 'string',
              initialValue: '/contact/',
            }),

            defineField({
              name: 'style',
              title: 'Card Style',
              type: 'string',
              options: {
                list: [
                  {title: 'Default', value: 'default'},
                  {title: 'Gold', value: 'gold'},
                ],
                layout: 'radio',
              },
              initialValue: 'default',
            }),
          ],

          preview: {
            select: {
              title: 'title',
              category: 'category',
              style: 'style',
            },

            prepare({title, category, style}) {
              return {
                title: title || 'Service',
                subtitle: `${category || ''}${style === 'gold' ? ' — Gold' : ''}`,
              }
            },
          },
        },
      ],

      initialValue: [
        {
          _key: 'also-1',
          title: 'Data Cleansing',
          category: 'Data quality',
          buttonText: 'Talk to a specialist',
          link: '/contact/',
          style: 'default',
        },
        {
          _key: 'also-2',
          title: 'Data Profiling',
          category: 'Analysis & ICPs',
          buttonText: 'Talk to a specialist',
          link: '/contact/',
          style: 'gold',
        },
      ],
    }),
  ],

  preview: {
    select: {
      label: 'label',
      items: 'items',
    },

    prepare({label, items}) {
      return {
        title: 'Also Offered',
        subtitle: `${label || 'Also offered'} — ${items?.length || 0} services`,
      }
    },
  },
})
