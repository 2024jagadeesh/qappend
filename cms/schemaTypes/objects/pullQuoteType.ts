import {defineField, defineType} from 'sanity'

export const pullQuoteType = defineType({
  name: 'pullQuote',
  title: 'Pull Quote',
  type: 'object',

  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 4,
    }),

    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
    }),

    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
    }),
  ],

  preview: {
    select: {
      quote: 'quote',
      author: 'author',
    },

    prepare({quote, author}) {
      return {
        title: 'Pull Quote',
        subtitle: author ? `${quote || ''} — ${author}` : quote || '',
      }
    },
  },
})
