import {defineType, defineField} from 'sanity'

export const videoBandType = defineType({
  name: 'videoBand',
  title: 'Video Band',
  type: 'object',

  fields: [
    defineField({
      name: 'tag',
      title: 'Tag',
      type: 'string',
      initialValue: 'Watch',
    }),

    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'See what',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'headingHighlight',
      title: 'Heading Highlight',
      description: 'The highlighted/italic part of the heading.',
      type: 'string',
      initialValue: 'QuickAppend',
    }),

    defineField({
      name: 'headingEnd',
      title: 'Heading Ending',
      type: 'string',
      initialValue: 'does in 50 seconds.',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      initialValue:
        'A quick walkthrough of how we append, enrich, profile, and clean your records, and what that means for your pipeline.',
    }),

    defineField({
      name: 'video',
      title: 'Explainer Video',
      type: 'file',
      options: {
        accept: 'video/mp4,video/webm',
      },
    }),
  ],

  preview: {
    select: {
      tag: 'tag',
      heading: 'heading',
      headingHighlight: 'headingHighlight',
      headingEnd: 'headingEnd',
    },

    prepare({tag, heading, headingHighlight, headingEnd}) {
      return {
        title: 'Video Band',
        subtitle: `${tag ?? ''} — ${heading ?? ''} ${headingHighlight ?? ''} ${headingEnd ?? ''}`,
      }
    },
  },
})
