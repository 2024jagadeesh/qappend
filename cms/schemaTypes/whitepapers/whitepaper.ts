import {defineField, defineType} from 'sanity'

export const whitepaperType = defineType({
  name: 'whitepaper',
  title: 'Whitepaper',
  type: 'document',

  fields: [
    // =====================================================
    // BASIC INFORMATION
    // =====================================================

    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
    }),

    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 4,
    }),

    defineField({
      name: 'readTime',
      title: 'Read Time',
      type: 'string',
      description: 'Example: 6 min read',
    }),

    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
    }),

    // =====================================================
    // HERO
    // =====================================================

    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',

      fields: [
        defineField({
          name: 'badge',
          title: 'Badge',
          type: 'string',
          initialValue: 'White Paper',
        }),

        defineField({
          name: 'title',
          title: 'Hero Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),

        defineField({
          name: 'description',
          title: 'Hero Description',
          type: 'text',
          rows: 5,
        }),

        defineField({
          name: 'heroImage',
          title: 'Hero Image',
          type: 'image',
          options: {
            hotspot: true,
          },
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
            }),

            defineField({
              name: 'action',
              title: 'Action',
              type: 'string',
              description: 'Example: modal, URL, download',
            }),

            defineField({
              name: 'link',
              title: 'Link',
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
              title: 'Text',
              type: 'string',
            }),

            defineField({
              name: 'action',
              title: 'Action',
              type: 'string',
            }),

            defineField({
              name: 'link',
              title: 'Link',
              type: 'string',
            }),
          ],
        }),
      ],
    }),

    // =====================================================
    // PROBLEM
    // =====================================================

    defineField({
      name: 'problem',
      title: 'Problem / Data Decay',
      type: 'object',

      fields: [
        defineField({
          name: 'eyebrow',
          title: 'Eyebrow',
          type: 'string',
          initialValue: 'The problem',
        }),

        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
        }),

        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 4,
        }),

        defineField({
          name: 'checklist',
          title: 'Checklist',
          type: 'array',

          of: [
            {
              type: 'object',

              fields: [
                defineField({
                  name: 'text',
                  title: 'Text',
                  type: 'text',
                  rows: 3,
                }),
              ],
            },
          ],
        }),

        defineField({
          name: 'stats',
          title: 'Statistics',
          type: 'array',

          of: [
            {
              type: 'object',

              fields: [
                defineField({
                  name: 'number',
                  title: 'Number',
                  type: 'string',
                }),

                defineField({
                  name: 'label',
                  title: 'Label',
                  type: 'string',
                }),

                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                  rows: 2,
                }),
              ],
            },
          ],
        }),
      ],
    }),

    // =====================================================
    // OFFERING
    // =====================================================

    defineField({
      name: 'offering',
      title: 'Service Offering',
      type: 'object',

      fields: [
        defineField({
          name: 'eyebrow',
          title: 'Eyebrow',
          type: 'string',
        }),

        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
        }),

        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 4,
        }),

        defineField({
          name: 'cards',
          title: 'Service Cards',
          type: 'array',

          of: [
            {
              type: 'object',

              fields: [
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                }),

                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                  rows: 4,
                }),

                defineField({
                  name: 'icon',
                  title: 'Icon',
                  type: 'string',
                  description: 'Optional icon identifier.',
                }),
              ],
            },
          ],
        }),
      ],
    }),

    // =====================================================
    // PROOF / METRICS
    // =====================================================

    defineField({
      name: 'proof',
      title: 'Proof / Metrics',
      type: 'object',

      fields: [
        defineField({
          name: 'eyebrow',
          title: 'Eyebrow',
          type: 'string',
        }),

        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
        }),

        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 4,
        }),

        defineField({
          name: 'metrics',
          title: 'Metrics',
          type: 'array',

          of: [
            {
              type: 'object',

              fields: [
                defineField({
                  name: 'number',
                  title: 'Number',
                  type: 'string',
                }),

                defineField({
                  name: 'suffix',
                  title: 'Suffix',
                  type: 'string',
                }),

                defineField({
                  name: 'label',
                  title: 'Label',
                  type: 'string',
                }),

                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                  rows: 2,
                }),
              ],
            },
          ],
        }),

        defineField({
          name: 'chart',
          title: 'Benchmark Chart',
          type: 'object',

          fields: [
            defineField({
              name: 'title',
              title: 'Chart Title',
              type: 'string',
            }),

            defineField({
              name: 'firstLabel',
              title: 'First Series',
              type: 'string',
            }),

            defineField({
              name: 'secondLabel',
              title: 'Second Series',
              type: 'string',
            }),

            defineField({
              name: 'items',
              title: 'Chart Items',
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
                      name: 'firstValue',
                      title: 'First Value',
                      type: 'number',
                    }),

                    defineField({
                      name: 'secondValue',
                      title: 'Second Value',
                      type: 'number',
                    }),
                  ],
                },
              ],
            }),

            defineField({
              name: 'note',
              title: 'Chart Note',
              type: 'text',
              rows: 3,
            }),
          ],
        }),
      ],
    }),

    // =====================================================
    // PROCESS
    // =====================================================

    defineField({
      name: 'process',
      title: 'Process',
      type: 'object',

      fields: [
        defineField({
          name: 'eyebrow',
          title: 'Eyebrow',
          type: 'string',
        }),

        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
        }),

        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 4,
        }),

        defineField({
          name: 'steps',
          title: 'Steps',
          type: 'array',

          of: [
            {
              type: 'object',

              fields: [
                defineField({
                  name: 'number',
                  title: 'Number',
                  type: 'string',
                }),

                defineField({
                  name: 'label',
                  title: 'Label',
                  type: 'string',
                }),

                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                }),

                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                  rows: 3,
                }),
              ],
            },
          ],
        }),

        defineField({
          name: 'note',
          title: 'Note',
          type: 'text',
          rows: 3,
        }),
      ],
    }),

    // =====================================================
    // OUTPUT
    // =====================================================

    defineField({
      name: 'output',
      title: 'Output',
      type: 'object',

      fields: [
        defineField({
          name: 'eyebrow',
          title: 'Eyebrow',
          type: 'string',
        }),

        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
        }),

        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 4,
        }),

        defineField({
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),

        defineField({
          name: 'note',
          title: 'Note',
          type: 'text',
          rows: 3,
        }),
      ],
    }),

    // =====================================================
    // TRUST
    // =====================================================

    defineField({
      name: 'trust',
      title: 'Why Teams Choose Us',
      type: 'object',

      fields: [
        defineField({
          name: 'eyebrow',
          title: 'Eyebrow',
          type: 'string',
        }),

        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
        }),

        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 4,
        }),

        defineField({
          name: 'items',
          title: 'Trust Items',
          type: 'array',

          of: [
            {
              type: 'object',

              fields: [
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                }),

                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                  rows: 4,
                }),

                defineField({
                  name: 'icon',
                  title: 'Icon',
                  type: 'string',
                }),
              ],
            },
          ],
        }),
      ],
    }),

    // =====================================================
    // CTA
    // =====================================================

    defineField({
      name: 'cta',
      title: 'Final CTA',
      type: 'object',

      fields: [
        defineField({
          name: 'eyebrow',
          title: 'Eyebrow',
          type: 'string',
        }),

        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
        }),

        defineField({
          name: 'cards',
          title: 'CTA Cards',
          type: 'array',

          of: [
            {
              type: 'object',

              fields: [
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                }),

                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                  rows: 4,
                }),

                defineField({
                  name: 'buttonText',
                  title: 'Button Text',
                  type: 'string',
                }),

                defineField({
                  name: 'buttonAction',
                  title: 'Button Action',
                  type: 'string',
                }),

                defineField({
                  name: 'buttonLink',
                  title: 'Button Link',
                  type: 'string',
                }),
              ],
            },
          ],
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      category: 'category',
      featured: 'featured',
    },

    prepare({title, category, featured}) {
      return {
        title: featured ? `★ ${title}` : title,
        subtitle: category || 'Whitepaper',
      }
    },
  },
})
