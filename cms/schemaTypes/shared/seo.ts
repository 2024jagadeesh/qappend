import {defineField, defineType} from 'sanity'

export const seoType = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',

  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'SEO title shown in search results. Recommended: 50–60 characters.',
      validation: (Rule) => Rule.max(60),
    }),

    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'Description shown in search results. Recommended: around 150–160 characters.',
      validation: (Rule) => Rule.max(160),
    }),

    defineField({
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'url',
      description: 'Leave empty to automatically use the current page URL.',
    }),

    defineField({
      name: 'noIndex',
      title: 'No Index',
      type: 'boolean',
      description: 'Prevent search engines from indexing this page.',
      initialValue: false,
    }),

    defineField({
      name: 'ogImage',
      title: 'Social Share Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Image used when this page is shared on social media.',
    }),
  ],

  preview: {
    select: {
      title: 'metaTitle',
      description: 'metaDescription',
    },

    prepare({title, description}) {
      return {
        title: title || 'SEO Settings',
        subtitle: description || 'No meta description',
      }
    },
  },
})