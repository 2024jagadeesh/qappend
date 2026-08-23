import {defineField, defineType} from 'sanity'

export const compareType = defineType({
  name: 'compare',
  title: 'Compare Services',
  type: 'object',

  fields: [
    defineField({
      name: 'tag',
      title: 'Tag',
      type: 'string',
      initialValue: 'Cleansing · Appending · Enrichment · Profiling',
    }),

    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Four services.',
    }),

    defineField({
      name: 'headingHighlight',
      title: 'Heading Highlight',
      type: 'string',
      initialValue: 'Different',
    }),

    defineField({
      name: 'headingSuffix',
      title: 'Heading Suffix',
      type: 'string',
      initialValue: 'jobs.',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      initialValue:
        'They all touch the same database, but each answers a different question. Most teams sequence them: clean first, then complete, enhance, and analyze.',
    }),

    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Service Name',
              type: 'string',
            }),

            defineField({
              name: 'summary',
              title: 'Summary',
              type: 'string',
            }),

            defineField({
              name: 'style',
              title: 'Style',
              type: 'string',
              options: {
                list: [
                  {title: 'Olive', value: 'olive'},
                  {title: 'Flagship', value: 'flagship'},
                  {title: 'Dark', value: 'dark'},
                ],
                layout: 'radio',
              },
              initialValue: 'olive',
            }),

            defineField({
              name: 'open',
              title: 'Open by Default',
              type: 'boolean',
              initialValue: false,
            }),

            defineField({
              name: 'aspects',
              title: 'Service Details',
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
                      name: 'value',
                      title: 'Value',
                      type: 'text',
                      rows: 3,
                    }),
                  ],
                  preview: {
                    select: {
                      title: 'label',
                      subtitle: 'value',
                    },
                  },
                },
              ],
            }),
          ],

          preview: {
            select: {
              name: 'name',
              summary: 'summary',
            },
            prepare({name, summary}) {
              return {
                title: name || 'Service',
                subtitle: summary || '',
              }
            },
          },
        },
      ],

      initialValue: [
        {
          _key: 'cleansing',
          name: 'Data Cleansing',
          summary: 'Improve data quality and accuracy.',
          style: 'olive',
          open: false,
          aspects: [
            {_key: 'focus', label: 'Focus', value: 'Data quality management'},
            {
              _key: 'input',
              label: 'Input',
              value: 'Existing database with errors, duplicates, or outdated information',
            },
            {
              _key: 'output',
              label: 'Output',
              value: 'Clean, validated, standardized records',
            },
            {
              _key: 'goal',
              label: 'Goal',
              value: 'Ensure reliable and usable data',
            },
            {
              _key: 'activities',
              label: 'Typical Activities',
              value: 'Deduplication, validation, standardization',
            },
            {
              _key: 'impact',
              label: 'Business Impact',
              value: 'Better CRM health and campaign performance',
            },
          ],
        },

        {
          _key: 'appending',
          name: 'Data Appending',
          summary: 'Fill missing information in records.',
          style: 'flagship',
          open: true,
          aspects: [
            {_key: 'focus', label: 'Focus', value: 'Data completion'},
            {
              _key: 'input',
              label: 'Input',
              value: 'Existing database with incomplete records',
            },
            {
              _key: 'output',
              label: 'Output',
              value: 'Records with missing fields completed',
            },
            {
              _key: 'goal',
              label: 'Goal',
              value: 'Improve record completeness',
            },
            {
              _key: 'activities',
              label: 'Typical Activities',
              value: 'Adding emails, phones, addresses, job titles',
            },
            {
              _key: 'impact',
              label: 'Business Impact',
              value: 'Improved reach and contactability',
            },
          ],
        },

        {
          _key: 'enrichment',
          name: 'Data Enrichment',
          summary: 'Enhance records with deeper intelligence and context.',
          style: 'dark',
          open: true,
          aspects: [
            {
              _key: 'focus',
              label: 'Focus',
              value: 'Data enhancement and intelligence',
            },
            {
              _key: 'input',
              label: 'Input',
              value: 'Existing customer or prospect database',
            },
            {
              _key: 'output',
              label: 'Output',
              value: 'Rich, multi-dimensional customer and company profiles',
            },
            {
              _key: 'goal',
              label: 'Goal',
              value: 'Improve customer understanding and targeting',
            },
            {
              _key: 'activities',
              label: 'Typical Activities',
              value:
                'Adding firmographics, technographics, intent signals, social data, buying insights',
            },
            {
              _key: 'impact',
              label: 'Business Impact',
              value: 'More precise targeting and personalization',
            },
          ],
        },

        {
          _key: 'profiling',
          name: 'Data Profiling',
          summary: 'Analyze and segment records to uncover patterns.',
          style: 'olive',
          open: true,
          aspects: [
            {
              _key: 'focus',
              label: 'Focus',
              value: 'Data analysis and audience understanding',
            },
            {
              _key: 'input',
              label: 'Input',
              value: 'Existing customer or prospect database',
            },
            {
              _key: 'output',
              label: 'Output',
              value: 'Audience insights, segments, and ICPs',
            },
            {
              _key: 'goal',
              label: 'Goal',
              value: 'Identify patterns and ideal customer characteristics',
            },
            {
              _key: 'activities',
              label: 'Typical Activities',
              value: 'Segment analysis, trend discovery, customer modeling',
            },
            {
              _key: 'impact',
              label: 'Business Impact',
              value: 'Better strategic decision-making and segmentation',
            },
          ],
        },
      ],
    }),
  ],

  preview: {
    select: {
      heading: 'heading',
      highlight: 'headingHighlight',
    },

    prepare({heading, highlight}) {
      return {
        title: 'Compare Services',
        subtitle: `${heading ?? ''} ${highlight ?? ''}`,
      }
    },
  },
})
