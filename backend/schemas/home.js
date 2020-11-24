export default {
    name: 'home',
    title: 'Home',
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
            name: 'heroMobileTagline',
            title: 'Hero Mobile Tagline',
            type: 'string'
        },
        {
            name: 'heroMobileDescription',
            title: 'Hero Mobile Description',
            type: 'string'
        },
        {
            name: 'heroDesktopDescription',
            title: 'Hero Desktop Description',
            type: 'string'
        },
        {
            name: 'heroProductsIndicatorText',
            title: 'Hero Products Indicator Text',
            type: 'string'
        },
    ],
  
    preview: {
      select: {
        title: 'title',
      }
    }
  }
  