import {defineType, defineField} from 'sanity'

export const statsType = defineType({
  name: 'stats',
  title: 'Stats',
  type: 'object',

  fields: [
    defineField({
      name: 'items',
      title: 'Statistics',
      type: 'array',

      of: [
        {
          type: 'object',

          fields: [
            defineField({
              name: 'value',
              title: 'Value',
              type: 'string',
              initialValue: '98',
            }),

            defineField({
              name: 'suffix',
              title: 'Suffix',
              type: 'string',
              initialValue: '%',
            }),

            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              initialValue: 'Verified accuracy',
            }),
          ],

          preview: {
            select: {
              value: 'value',
              suffix: 'suffix',
              label: 'label',
            },

            prepare({value, suffix, label}) {
              return {
                title: `${value ?? ''}${suffix ?? ''}`,
                subtitle: label ?? 'Statistic',
              }
            },
          },
        },
      ],

      initialValue: [
        {
          _key: 'stat-1',
          value: '98',
          suffix: '%',
          label: 'Verified accuracy',
        },
        {
          _key: 'stat-2',
          value: '740M+',
          suffix: '',
          label: 'Contact records',
        },
        {
          _key: 'stat-3',
          value: '+52',
          suffix: '%',
          label: 'Avg. reachability lift',
        },
        {
          _key: 'stat-4',
          value: '72',
          suffix: 'hr',
          label: 'Typical turnaround',
        },
      ],
    }),
  ],

  preview: {
    select: {
      items: 'items',
    },

    prepare({items}) {
      const count = items?.length ?? 0

      return {
        title: 'Stats',
        subtitle: `${count} ${count === 1 ? 'statistic' : 'statistics'}`,
      }
    },
  },
})
