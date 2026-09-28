import {defineField, defineType} from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',

  fields: [
    // -----------------------------------------
    // SITE
    // -----------------------------------------
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

    // -----------------------------------------
    // HEADER CTA
    // -----------------------------------------
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

    // -----------------------------------------
    // NAVIGATION
    // -----------------------------------------
    defineField({
      name: 'navigation',
      title: 'Navigation',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'link',
              title: 'Link',
              type: 'string',
            }),

            defineField({
              name: 'type',
              title: 'Menu Type',
              type: 'string',
              options: {
                list: [
                  {title: 'Link', value: 'link'},
                  {title: 'Dropdown', value: 'dropdown'},
                ],
                layout: 'radio',
              },
              initialValue: 'link',
            }),

            defineField({
              name: 'dropdownStyle',
              title: 'Dropdown Style',
              type: 'string',
              options: {
                list: [
                  {title: 'Default', value: 'default'},
                  {title: 'Right Aligned', value: 'right'},
                ],
                layout: 'radio',
              },
              initialValue: 'default',
              hidden: ({parent}) => parent?.type !== 'dropdown',
            }),

            defineField({
              name: 'items',
              title: 'Dropdown Items',
              type: 'array',
              hidden: ({parent}) => parent?.type !== 'dropdown',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'label',
                      title: 'Label',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    }),

                    defineField({
                      name: 'description',
                      title: 'Description',
                      type: 'string',
                    }),

                    defineField({
                      name: 'link',
                      title: 'Link',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    }),
                  ],
                },
              ],
            }),
          ],
        },
      ],
    }),

    defineField({
  name: 'footer',
  title: 'Footer',
  type: 'object',
  fields: [

    defineField({
      name: 'description',
      title: 'Footer Description',
      type: 'text',
      rows: 4,
    }),

    defineField({
      name: 'columns',
      title: 'Footer Columns',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [

            defineField({
              name: 'title',
              title: 'Column Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'links',
              title: 'Links',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [

                    defineField({
                      name: 'label',
                      title: 'Label',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    }),

                    defineField({
                      name: 'link',
                      title: 'Link',
                      type: 'string',
                    }),

                  ],
                },
              ],
            }),

          ],
        },
      ],
    }),

    defineField({
      name: 'legalLinks',
      title: 'Legal Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [

            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
            }),

            defineField({
              name: 'link',
              title: 'Link',
              type: 'string',
            }),

          ],
        },
      ],
    }),

    defineField({
      name: 'copyright',
      title: 'Copyright Text',
      type: 'string',
      initialValue: '© 2026 QuickAppend, Inc. All rights reserved.',
    }),

    defineField({
      name: 'bottomText',
      title: 'Footer Bottom Text',
      type: 'string',
      initialValue: 'Made for revenue teams who count.',
    }),

  ],
}),
  ],
  

  preview: {
    prepare() {
      return {
        title: 'Site Settings',
      }
    },
  },
})