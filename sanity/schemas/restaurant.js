export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Restaurant name',
      type: 'string',
      //validation: {Rule} => Rule.required()

    },
   
    {
      name: 'short_description',
      title: 'Short Description',
      type: 'string',
      of: [{type: 'reference', to: {type: 'dish'}}],
    },
   
    {
      name: 'image',
      title: 'Image of the Restaurant',
      type: 'image',
    },
    {
      name: 'lat',
      title: 'Latitude of the Restaurant',
      type: 'number',
    },
    {
      name: 'long',
      title: 'Longitude of the Restaurant',
      type: 'number',
    },
    {
      name: 'address',
      title: 'Restaurant Address',
      type: 'string',
    },
    {
      name: 'rating',
      title: 'Enter a Rating from (1-5 stars)',
      type: 'number',
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(5)
          .error("Please enter a Value between 1 and 5")
    },
    {
      name: 'type',
      title: 'Category',
      validation: (Rule) => Rule.required(),
      type: 'reference',
      to: [{ type: "category"}],
    },


  ],
}
