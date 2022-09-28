export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'project_number',
      title: 'Project Number',
      type: 'number',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
    },
    {
      name: 'tech_stack',
      title: 'Tech Stack',
      type: 'string'
    },
    {
      name: 'main_image',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'published_at',
      title: 'Published at',
      type: 'date',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'markdown',
    },
    {
      name: 'finished',
      title: 'Finished',
      type: 'boolean'
    },
    {
      name: 'site_link',
      title: 'Site Link',
      type: 'url'
    },
    {
      name: 'github_link',
      title: 'Github Link',
      type: 'url'
    }
  ],

  orderings: [
    {
      title: 'Release Date',
      name: 'defaultDateSort',
      by: [
        {field: 'published_at', direction: 'desc'}
      ]
    }
  ],

  preview: {
    select: {
      title: 'title',
      date: 'published_at',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection.orderings === "projectNumber"
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
