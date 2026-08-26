import {defineField, defineType} from 'sanity'

export const serviceListType = defineType({
  name: 'serviceList',
  title: 'Service List',
  type: 'object',

  fields: [
    defineField({
      name: 'tag',
      title: 'Section Tag',
      type: 'string',
      initialValue: 'Data Appending',
    }),

    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Every field,',
    }),

    defineField({
      name: 'headingHighlight',
      title: 'Heading Highlight',
      type: 'string',
      initialValue: 'verified',
    }),

    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Service Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'slug',
              title: 'Anchor / Slug',
              type: 'slug',
              options: {
                source: 'name',
                maxLength: 96,
              },
            }),

            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 4,
            }),

            defineField({
              name: 'flag',
              title: 'Flag',
              type: 'string',
            }),

            defineField({
              name: 'style',
              title: 'Style',
              type: 'string',
              options: {
                list: [
                  {title: 'Default', value: 'default'},
                  {title: 'Green', value: 'green'},
                ],
                layout: 'radio',
              },
              initialValue: 'default',
            }),

            defineField({
              name: 'icon',
              title: 'Icon SVG',
              type: 'text',
              rows: 5,
            }),

            defineField({
              name: 'includes',
              title: 'Includes',
              type: 'array',
              of: [{type: 'string'}],
            }),
          ],

          preview: {
            select: {
              name: 'name',
              flag: 'flag',
            },

            prepare({name, flag}) {
              return {
                title: name || 'Service',
                subtitle: flag || 'Service',
              }
            },
          },
        },
      ],
    }),
  ],

  preview: {
    select: {
      heading: 'heading',
      highlight: 'headingHighlight',
      tag: 'tag',
    },

    prepare({heading, highlight, tag}) {
      return {
        title: 'Services List',
        subtitle: `${heading || ''} ${highlight || ''} — ${tag || 'Data Appending'}`,
      }
    },
  },
})
