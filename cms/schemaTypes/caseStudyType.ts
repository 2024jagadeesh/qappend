import {defineField, defineType} from 'sanity'

export const caseStudyType = defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',

  fields: [
    // ==================================================
    // BASIC INFORMATION
    // ==================================================

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

    // ==================================================
    // FEATURED
    // ==================================================

    defineField({
      name: 'featured',
      title: 'Featured Case Study',
      type: 'boolean',
      description:
        'Show this case study as the featured case study on the Case Studies listing page.',
      initialValue: false,
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Example: Case Study · Enterprise SaaS',
    }),

    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Example: Technographic & Intent Enrichment',
    }),

    defineField({
      name: 'deployment',
      title: 'Deployment',
      type: 'string',
      description: 'Example: 90-day deployment',
    }),

    defineField({
      name: 'readTime',
      title: 'Read Time',
      type: 'string',
      description: 'Example: 6 min read',
    }),

    // ==================================================
    // CONTEXT
    // ==================================================

    defineField({
      name: 'context',
      title: 'Context',
      type: 'object',

      fields: [
        defineField({
          name: 'industry',
          title: 'Industry',
          type: 'string',
        }),

        defineField({
          name: 'team',
          title: 'Team',
          type: 'string',
        }),

        defineField({
          name: 'targetList',
          title: 'Target List',
          type: 'string',
        }),

        defineField({
          name: 'services',
          title: 'Services',
          type: 'string',
        }),

        defineField({
          name: 'timeline',
          title: 'Timeline',
          type: 'string',
        }),

        defineField({
          name: 'atAGlance',
          title: 'At a Glance',
          type: 'text',
          rows: 4,
        }),
      ],
    }),

    // ==================================================
    // RESULTS METRICS
    // ==================================================

    defineField({
      name: 'metrics',
      title: 'Results Metrics',
      type: 'array',

      of: [
        {
          type: 'object',

          fields: [
            defineField({
              name: 'value',
              title: 'Value',
              type: 'string',
            }),

            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
            }),
          ],

          preview: {
            select: {
              value: 'value',
              label: 'label',
            },

            prepare({value, label}) {
              return {
                title: value || 'Metric',
                subtitle: label || '',
              }
            },
          },
        },
      ],
    }),

    // ==================================================
    // RELATED CASE STUDIES
    // ==================================================

    defineField({
      name: 'relatedCaseStudies',
      title: 'Related Case Studies',
      type: 'array',

      of: [
        {
          type: 'reference',
          to: [{type: 'caseStudy'}],
        },
      ],

      validation: (Rule) => Rule.unique(),
    }),

    // ==================================================
    // ARTICLE
    // ==================================================

    defineField({
      name: 'article',
      title: 'Article',
      type: 'array',

      of: [
        {
          type: 'block',
        },

        {
          type: 'challengeBoxes',
        },

        {
          type: 'pullQuote',
        },

        {
          type: 'caseStudyChart',
        },

        {
          type: 'resultBoxes',
        },

        {
          type: 'comparisonChart',
        },
      ],
    }),
  ],

  // ==================================================
  // STUDIO PREVIEW
  // ==================================================

  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      featured: 'featured',
    },

    prepare({title, subtitle, featured}) {
      return {
        title: featured ? `★ ${title}` : title,
        subtitle: featured ? `${subtitle || ''} · Featured` : subtitle || '',
      }
    },
  },
})
