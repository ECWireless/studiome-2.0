export default {
  name: 'officeClosureNotice',
  title: 'Office Closure Notice',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'officeClosureNoticeToggle',
      title: 'Show Popup',
      type: 'boolean'
    },
    {
      name: 'officeClosureNoticeHeading',
      title: 'Heading',
      type: 'string'
    },
    {
      name: 'officeClosureNoticeParagraph',
      title: 'Paragraph',
      type: 'string'
    },
  ],

  preview: {
    select: {
      title: 'title',
    }
  }
}
