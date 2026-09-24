import {defineField, defineType} from 'sanity'

export const whitepapersPageType = defineType({
  name: 'whitepapersPage',
  title: 'White Papers Page',
  type: 'document',

  fields: [
    // =========================================================
    // BREADCRUMB
    // =========================================================

    defineField({
      name: 'breadcrumb',
      title: 'Breadcrumb',
      type: 'object',
      fields: [
        defineField({
          name: 'label',
          title: 'Label',
          type: 'string',
          initialValue: 'White Papers',
        }),
      ],
    }),

    // =========================================================
    // HERO
    // =========================================================

    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
          initialValue: 'In-depth playbooks on',
          validation: (Rule) => Rule.required(),
        }),

        defineField({
          name: 'highlight',
          title: 'Highlight',
          type: 'string',
          initialValue: 'B2B data',
        }),

        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 4,
        }),

        defineField({
          name: 'button',
          title: 'Button',
          type: 'object',
          fields: [
            defineField({
              name: 'text',
              title: 'Button Text',
              type: 'string',
              initialValue: 'Request free audit',
            }),

            defineField({
              name: 'link',
              title: 'Button Link',
              type: 'string',
              initialValue: '/contact',
            }),
          ],
        }),
      ],
    }),

    // =========================================================
    // FINAL CTA
    // =========================================================

    defineField({
      name: 'finalCta',
      title: 'Final CTA',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
          initialValue: 'Put the playbook to work',
        }),

        defineField({
          name: 'highlight',
          title: 'Highlight',
          type: 'string',
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
              title: 'Text',
              type: 'string',
              initialValue: 'Request free audit',
            }),

            defineField({
              name: 'link',
              title: 'Link',
              type: 'string',
              initialValue: '/contact',
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
              title: 'Text',
              type: 'string',
              initialValue: 'Speak with a specialist',
            }),

            defineField({
              name: 'link',
              title: 'Link',
              type: 'string',
              initialValue: '/contact',
            }),
          ],
        }),
      ],
    }),
  ],

  preview: {
    prepare() {
      return {
        title: 'White Papers Page',
      }
    },
  },
})
