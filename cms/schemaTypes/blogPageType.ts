import {defineField, defineType} from 'sanity'

export const blogPageType = defineType({
  name: 'blogPage',
  title: 'Blog Page',
  type: 'document',

  fields: [
    defineField({
      name: 'breadcrumb',
      title: 'Breadcrumb',
      type: 'object',
      fields: [
        defineField({
          name: 'label',
          title: 'Label',
          type: 'string',
          initialValue: 'Blog',
        }),
      ],
    }),

    defineField({
      name: 'hero',
      title: 'Page Head',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
          description: 'Example: Thoughts & Insights on',
        }),

        defineField({
          name: 'highlight',
          title: 'Highlighted Heading',
          type: 'string',
          description: 'Example: clean data.',
        }),

        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 4,
        }),

        defineField({
          name: 'button',
          title: 'CTA Button',
          type: 'object',
          fields: [
            defineField({
              name: 'text',
              title: 'Button Text',
              type: 'string',
            }),

            defineField({
              name: 'link',
              title: 'Button Link',
              type: 'string',
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: 'finalCta',
      title: 'Final CTA',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
          description: 'Example: Put the playbook to work.',
        }),

        defineField({
          name: 'highlight',
          title: 'Highlighted Heading',
          type: 'string',
          description: 'Optional highlighted part of the heading.',
        }),

        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 4,
        }),

        defineField({
          name: 'primaryButton',
          title: 'Primary Button',
          type: 'object',
          fields: [
            defineField({
              name: 'text',
              title: 'Button Text',
              type: 'string',
            }),

            defineField({
              name: 'link',
              title: 'Button Link',
              type: 'string',
            }),
          ],
        }),

        defineField({
          name: 'secondaryButton',
          title: 'Secondary Button',
          type: 'object',
          fields: [
            defineField({
              name: 'text',
              title: 'Button Text',
              type: 'string',
            }),

            defineField({
              name: 'link',
              title: 'Button Link',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
  ],

  preview: {
    prepare() {
      return {
        title: 'Blog Page',
      }
    },
  },
})
