import {defineField, defineType} from 'sanity'

export const blogType = defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',

  fields: [
    // --------------------------------------------------
    // BASIC BLOG INFORMATION
    // --------------------------------------------------

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
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 4,
    }),

    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      initialValue: 'QuickAppend Team',
    }),

    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'date',
    }),

    defineField({
      name: 'readTime',
      title: 'Read Time',
      type: 'string',
      description: 'Example: 8 min read',
    }),

    defineField({
      name: 'featured',
      title: 'Featured Blog',
      type: 'boolean',
      initialValue: false,
    }),

    // --------------------------------------------------
    // LEAD IMAGE
    // --------------------------------------------------

    defineField({
      name: 'image',
      title: 'Lead Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        }),
      ],
    }),

    defineField({
      name: 'leadImageCaption',
      title: 'Lead Image Caption',
      type: 'string',
    }),

    // --------------------------------------------------
    // BLOG CONTENT
    // --------------------------------------------------

    defineField({
      name: 'content',
      title: 'Blog Content',
      type: 'array',

      of: [
        // ----------------------------------------------
        // NORMAL RICH TEXT
        // ----------------------------------------------

        {
          type: 'block',

          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Heading 2', value: 'h2'},
            {title: 'Heading 3', value: 'h3'},
            {title: 'Quote', value: 'blockquote'},
          ],

          lists: [
            {title: 'Bullet', value: 'bullet'},
            {title: 'Numbered', value: 'number'},
          ],

          marks: {
            decorators: [
              {title: 'Bold', value: 'strong'},
              {title: 'Italic', value: 'em'},
            ],

            annotations: [
              {
                name: 'primaryKeyword',
                title: 'Primary Keyword',
                type: 'object',
                fields: [
                  defineField({
                    name: 'keyword',
                    title: 'Keyword',
                    type: 'string',
                  }),
                ],
              },
              {
                name: 'secondaryKeyword',
                title: 'Secondary Keyword',
                type: 'object',
                fields: [
                  defineField({
                    name: 'keyword',
                    title: 'Keyword',
                    type: 'string',
                  }),
                ],
              },
            ],
          },
        },

        // ----------------------------------------------
        // PULL QUOTE
        // ----------------------------------------------

        {
          type: 'object',
          name: 'pullQuote',
          title: 'Pull Quote',

          fields: [
            defineField({
              name: 'quote',
              title: 'Quote',
              type: 'text',
              rows: 4,
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'author',
              title: 'Author',
              type: 'string',
            }),
          ],

          preview: {
            select: {
              title: 'quote',
            },
            prepare({title}) {
              return {
                title: 'Pull Quote',
                subtitle: title,
              }
            },
          },
        },

        // ----------------------------------------------
        // STEP GRID
        // ----------------------------------------------

        {
          type: 'object',
          name: 'stepGrid',
          title: 'Step Grid',

          fields: [
            defineField({
              name: 'steps',
              title: 'Steps',
              type: 'array',

              of: [
                {
                  type: 'object',

                  fields: [
                    defineField({
                      name: 'title',
                      title: 'Step Title',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    }),

                    defineField({
                      name: 'description',
                      title: 'Description',
                      type: 'text',
                      rows: 4,
                      validation: (Rule) => Rule.required(),
                    }),
                  ],

                  preview: {
                    select: {
                      title: 'title',
                      subtitle: 'description',
                    },
                  },
                },
              ],

              validation: (Rule) => Rule.min(1).max(4),
            }),
          ],

          preview: {
            select: {
              steps: 'steps',
            },
            prepare({steps}) {
              return {
                title: 'Step Grid',
                subtitle: `${steps?.length || 0} steps`,
              }
            },
          },
        },

        // ----------------------------------------------
        // COMPARISON TABLE
        // ----------------------------------------------

        {
          type: 'object',
          name: 'comparisonTable',
          title: 'Comparison Table',

          fields: [
            defineField({
              name: 'b2bTitle',
              title: 'B2B Column Title',
              type: 'string',
              initialValue: 'B2B data appending',
            }),

            defineField({
              name: 'consumerTitle',
              title: 'Consumer Column Title',
              type: 'string',
              initialValue: 'Consumer data',
            }),

            defineField({
              name: 'rows',
              title: 'Rows',
              type: 'array',

              of: [
                {
                  type: 'object',

                  fields: [
                    defineField({
                      name: 'dimension',
                      title: 'Dimension',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    }),

                    defineField({
                      name: 'b2b',
                      title: 'B2B',
                      type: 'text',
                      rows: 3,
                    }),

                    defineField({
                      name: 'consumer',
                      title: 'Consumer',
                      type: 'text',
                      rows: 3,
                    }),
                  ],

                  preview: {
                    select: {
                      title: 'dimension',
                      subtitle: 'b2b',
                    },
                  },
                },
              ],
            }),
          ],

          preview: {
            select: {
              b2bTitle: 'b2bTitle',
              consumerTitle: 'consumerTitle',
              rows: 'rows',
            },

            prepare({b2bTitle, consumerTitle, rows}) {
              return {
                title: 'Comparison Table',
                subtitle: `${b2bTitle} vs ${consumerTitle} · ${rows?.length || 0} rows`,
              }
            },
          },
        },

        // ----------------------------------------------
        // CRITERIA GRID
        // ----------------------------------------------

        {
          type: 'object',
          name: 'criteriaGrid',
          title: 'Criteria Grid',

          fields: [
            defineField({
              name: 'items',
              title: 'Criteria',
              type: 'array',

              of: [
                {
                  type: 'object',

                  fields: [
                    defineField({
                      name: 'title',
                      title: 'Title',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    }),

                    defineField({
                      name: 'description',
                      title: 'Description',
                      type: 'text',
                      rows: 4,
                      validation: (Rule) => Rule.required(),
                    }),
                  ],

                  preview: {
                    select: {
                      title: 'title',
                      subtitle: 'description',
                    },
                  },
                },
              ],
            }),
          ],

          preview: {
            select: {
              items: 'items',
            },

            prepare({items}) {
              return {
                title: 'Criteria Grid',
                subtitle: `${items?.length || 0} criteria`,
              }
            },
          },
        },

        // ----------------------------------------------
        // INLINE BLOG IMAGE
        // ----------------------------------------------

        {
          type: 'image',
          name: 'blogImage',
          title: 'Article Image',

          options: {
            hotspot: true,
          },

          fields: [
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
            }),

            defineField({
              name: 'caption',
              title: 'Caption',
              type: 'string',
            }),
          ],
        },

        // ----------------------------------------------
        // BOTTOM LINE
        // ----------------------------------------------

        {
          type: 'object',
          name: 'bottomLine',
          title: 'Bottom Line',

          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              initialValue: 'The bottom line',
            }),

            defineField({
              name: 'text',
              title: 'Text',
              type: 'text',
              rows: 5,
            }),
          ],

          preview: {
            select: {
              title: 'title',
            },

            prepare({title}) {
              return {
                title: 'Bottom Line',
                subtitle: title,
              }
            },
          },
        },
      ],
    }),

    // --------------------------------------------------
    // RELATED ARTICLES
    // --------------------------------------------------

    defineField({
      name: 'relatedArticles',
      title: 'Related Articles',
      type: 'array',

      of: [
        {
          type: 'reference',
          to: [{type: 'blog'}],
        },
      ],

      validation: (Rule) => Rule.unique(),
    }),

    // --------------------------------------------------
    // RELATED CASE STUDIES
    // --------------------------------------------------

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
  ],

  // ----------------------------------------------------
  // PREVIEW
  // ----------------------------------------------------

  preview: {
    select: {
      title: 'title',
      category: 'category',
      media: 'image',
    },

    prepare({title, category, media}) {
      return {
        title,
        subtitle: category,
        media,
      }
    },
  },
})
