export default {
  name: 'advert',
  type: 'document',
  title: 'Advert',
  fields: [
    {
      name: 'Text',
      type: 'string',
      title: 'Text',
    },
    {
      name: 'poster',
      type: 'image',
      title: 'Poster',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'article',
      type: 'array',
      title: 'Article',
      of: [{type: 'block'}],
    },
  ],
}
