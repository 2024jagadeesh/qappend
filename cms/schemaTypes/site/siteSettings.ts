import {defineField, defineType} from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',

  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      initialValue: 'QuickAppend',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'headerCtaText',
      title: 'Header CTA Text',
      type: 'string',
      initialValue: 'Request Audit',
    }),

    defineField({
      name: 'headerCtaLink',
      title: 'Header CTA Link',
      type: 'string',
      initialValue: '#',
    }),
  ],
})
