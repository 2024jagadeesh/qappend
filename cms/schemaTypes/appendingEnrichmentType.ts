import {defineField, defineType} from 'sanity'

export const appendingEnrichmentType = defineType({
  name: 'appendingEnrichment',
  title: 'Appending + Enrichment',
  type: 'object',

  fields: [
    defineField({
      name: 'appendingTag',
      title: 'Appending Tag',
      type: 'string',
      initialValue: 'Data Appending',
    }),

    defineField({
      name: 'appendingHeading',
      title: 'Appending Heading',
      type: 'string',
      initialValue: 'Complete the record.',
    }),

    defineField({
      name: 'appendingHighlight',
      title: 'Appending Highlight',
      type: 'string',
      initialValue: 'Field by field.',
    }),

    defineField({
      name: 'appendingButtonText',
      title: 'Appending Button Text',
      type: 'string',
      initialValue: 'Explore all nine appending services',
    }),

    defineField({
      name: 'appendingButtonLink',
      title: 'Appending Button Link',
      type: 'string',
      initialValue: '/services/',
    }),

    defineField({
      name: 'enrichmentTag',
      title: 'Enrichment Tag',
      type: 'string',
      initialValue: 'Data Enrichment',
    }),

    defineField({
      name: 'enrichmentHeading',
      title: 'Enrichment Heading',
      type: 'string',
      initialValue: 'Beyond completeness.',
    }),

    defineField({
      name: 'enrichmentHighlight',
      title: 'Enrichment Highlight',
      type: 'string',
      initialValue: 'Intelligence.',
    }),

    defineField({
      name: 'enrichmentButtonText',
      title: 'Enrichment Button Text',
      type: 'string',
      initialValue: 'Explore all eight enrichment layers',
    }),

    defineField({
      name: 'enrichmentButtonLink',
      title: 'Enrichment Button Link',
      type: 'string',
      initialValue: '/enrichment/',
    }),
  ],

  preview: {
    select: {
      appending: 'appendingHeading',
      enrichment: 'enrichmentHeading',
    },

    prepare({appending, enrichment}) {
      return {
        title: 'Appending + Enrichment',
        subtitle: `${appending ?? ''} / ${enrichment ?? ''}`,
      }
    },
  },
})
