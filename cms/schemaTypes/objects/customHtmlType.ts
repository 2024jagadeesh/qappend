import {defineField, defineType} from 'sanity'

export const customHtmlType = defineType({
  name: 'customHtml',
  title: 'Custom HTML',
  type: 'object',

  fields: [
    defineField({
      name: 'html',
      title: 'HTML',
      type: 'text',
      rows: 20,
      description: 'Paste HTML markup here.',
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      html: 'html',
    },

    prepare({html}) {
      return {
        title: 'Custom HTML',
        subtitle: html
          ? html
              .replace(/<[^>]*>/g, '')
              .trim()
              .slice(0, 100)
          : 'No HTML added',
      }
    },
  },
})
