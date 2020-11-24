export default {
    name: 'community',
    title: 'Community',
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
            name: 'mainBannerTitle',
            title: 'Main Banner Title',
            type: 'string'
        },
        {
            name: 'mainBannerImage',
            title: 'Main Banner Image',
            type: 'image',
            options: {
              hotspot: true
            }
        },
        {
            name: 'mainDescription',
            title: 'Main Description',
            type: 'string'
        },
        {
            name: 'eventsBannerTitle',
            title: 'Events Banner Title',
            type: 'string'
        },
        {
            name: 'eventsBannerImage',
            title: 'Events Banner Image',
            type: 'image',
            options: {
              hotspot: true
            }
        },
        {
            name: 'eventsDescription',
            title: 'Events Description',
            type: 'string'
        },
        {
            name: 'galleryBannerTitle',
            title: 'Gallery Banner Title',
            type: 'string'
        },
        {
            name: 'galleryBannerImage',
            title: 'Gallery Banner Image',
            type: 'image',
            options: {
              hotspot: true
            }
        },
        {
            name: 'galleryDescription',
            title: 'Gallery Description',
            type: 'string'
        },
        {
            name: 'learnBannerTitle',
            title: 'Learn Banner Title',
            type: 'string'
        },
        {
            name: 'learnBannerImage',
            title: 'Learn Banner Image',
            type: 'image',
            options: {
              hotspot: true
            }
        },
        {
            name: 'learnDescription',
            title: 'Learn Description',
            type: 'string'
        },
        {
            name: 'swagBannerTitle',
            title: 'Swag Banner Title',
            type: 'string'
        },
        {
            name: 'swagBannerImage',
            title: 'Swag Banner Image',
            type: 'image',
            options: {
              hotspot: true
            }
        },
        {
            name: 'swagDescription',
            title: 'Swag Description',
            type: 'string'
        },
    ],
  
    preview: {
      select: {
        title: 'title',
      }
    }
  }
  