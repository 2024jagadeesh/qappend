import {defineField, defineType} from 'sanity'

export const contactBookingType = defineType({
  name: 'contactBooking',
  title: 'Contact Booking',
  type: 'object',

  fields: [
    defineField({
      name: 'label',
      title: 'Section Label',
      type: 'string',
      initialValue: 'Contact Booking',
    }),
  ],

  preview: {
    select: {
      title: 'label',
    },
  },
})
