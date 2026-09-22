import {defineField, defineType} from 'sanity'

export const caseStudiesPageType = defineType({
  name: 'caseStudiesPage',
  title: 'Case Studies Page',
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
          initialValue: 'Case Studies',
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
          description: 'Example: Proof, in',
        }),

        defineField({
          name: 'highlight',
          title: 'Highlighted Heading',
          type: 'string',
          description: 'Example: the numbers',
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
          description: 'Example: Want results like',
        }),

        defineField({
          name: 'highlight',
          title: 'Highlighted Heading',
          type: 'string',
          description: 'Example: these?',
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
        title: 'Case Studies Page',
      }
    },
  },
})
