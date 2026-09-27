import {defineField, defineType} from 'sanity'

export const useCasesType = defineType({
  name: 'useCases',
  title: 'Use Cases',
  type: 'object',

  fields: [
    // =========================
    // USE CASES HEADER
    // =========================

    defineField({
      name: 'tag',
      title: 'Tag',
      type: 'string',
      initialValue: 'By team',
    }),

    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Empowering your teams with actionable data intelligence.',
      validation: (Rule) => Rule.required(),
    }),

    // =========================
    // USE CASE CLUSTERS
    // =========================

    defineField({
      name: 'clusters',
      title: 'Use Case Clusters',
      type: 'array',

      of: [
        {
          type: 'object',

          fields: [
            // Cluster Kicker
            defineField({
              name: 'kicker',
              title: 'Kicker',
              type: 'string',
              initialValue: 'Powered by',
            }),

            // Cluster Name
            defineField({
              name: 'name',
              title: 'Cluster Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),

            // Highlighted Word
            defineField({
              name: 'highlight',
              title: 'Highlighted Word',
              type: 'string',
              description: 'Word displayed in the highlighted/italic style.',
            }),

            // Cluster Description
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
              validation: (Rule) => Rule.required(),
            }),

            // =========================
            // CARDS
            // =========================

            defineField({
              name: 'cards',
              title: 'Use Case Cards',
              type: 'array',

              of: [
                {
                  type: 'object',

                  fields: [
                    // Card Number
                    defineField({
                      name: 'number',
                      title: 'Number',
                      type: 'string',
                      description: 'Example: 01',
                    }),

                    // Team / Category
                    defineField({
                      name: 'team',
                      title: 'Team / Category',
                      type: 'string',
                    }),

                    // Card Title
                    defineField({
                      name: 'title',
                      title: 'Title',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    }),

                    // Card Slug
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

                    // Card Description
                    defineField({
                      name: 'description',
                      title: 'Description',
                      type: 'text',
                      rows: 4,
                      validation: (Rule) => Rule.required(),
                    }),

                    // Bottom Kicker
                    defineField({
                      name: 'kicker',
                      title: 'Bottom Kicker',
                      type: 'string',
                    }),

                    // Highlighted Kicker Text
                    defineField({
                      name: 'kickerHighlight',
                      title: 'Kicker Highlight',
                      type: 'string',
                      description: 'Highlighted part of the bottom kicker.',
                    }),

                    // Bullet Points
                    defineField({
                      name: 'chips',
                      title: 'Bullet Points',
                      type: 'array',
                      of: [{type: 'string'}],
                    }),
                  ],

                  preview: {
                    select: {
                      title: 'title',
                      subtitle: 'team',
                    },
                  },
                },
              ],

              validation: (Rule) => Rule.min(1),
            }),
          ],

          preview: {
            select: {
              title: 'name',
              subtitle: 'description',
            },
          },
        },
      ],

      validation: (Rule) => Rule.min(1),
    }),

    // =========================
    // CLOSING CTA
    // =========================

    defineField({
      name: 'cta',
      title: 'Closing CTA',
      type: 'object',

      fields: [
        defineField({
          name: 'kicker',
          title: 'Kicker',
          type: 'string',
          initialValue: 'See it on your own data',
        }),

        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),

        defineField({
          name: 'headingHighlight',
          title: 'Heading Highlight',
          type: 'string',
          description: 'Highlighted/italic portion of the heading.',
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
          initialValue: 'Talk to a specialist',
        }),

        defineField({
          name: 'buttonLink',
          title: 'Button Link',
          type: 'string',
          initialValue: '/contact',
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: 'heading',
      subtitle: 'tag',
    },
  },
})
