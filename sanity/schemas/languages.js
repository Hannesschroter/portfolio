// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'languages',
  title: 'Languages',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Language',
      type: 'string',
    },
    {
      name: 'progress',
      title: 'Progress',
      type: 'number',
      description: 'Progress of skill from 0 to 100',
      validation: (Rule) => Rule.min(0).max(100),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },    
  ],
}
