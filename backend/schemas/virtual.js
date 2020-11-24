export default {
    name: 'virtual',
    title: 'Virtual',
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
            name: 'bannerTitle',
            title: 'Banner Title',
            type: 'string'
        },
        {
            name: 'bannerImage',
            title: 'Banner Image',
            type: 'image',
            options: {
              hotspot: true
            }
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
        {
            name: 'videoURL',
            title: 'Video URL',
            type: 'string'
        },
        {
            name: 'subheading',
            title: 'Subheading',
            type: 'string'
        },
        {
            name: 'product1Name',
            title: 'Product 1 Name',
            type: 'string'
        },
        {
            name: 'product1DescriptionShort',
            title: 'Product 1 Description Short',
            type: 'string'
        },
        {
            name: 'product1DescriptionLong',
            title: 'Product 1 Description Long',
            type: 'string'
        },
        {
            name: 'product1Image',
            title: 'Product 1 Image',
            type: 'image',
            options: {
              hotspot: true
            }
        },
        {
            name: 'product2Name',
            title: 'Product 2 Name',
            type: 'string'
        },
        {
            name: 'product2DescriptionShort',
            title: 'Product 2 Description Short',
            type: 'string'
        },
        {
            name: 'product2DescriptionLong',
            title: 'Product 2 Description Long',
            type: 'string'
        },
        {
            name: 'product2Image',
            title: 'Product 2 Image',
            type: 'image',
            options: {
              hotspot: true
            }
        },
        {
            name: 'product3Name',
            title: 'Product 3 Name',
            type: 'string'
        },
        {
            name: 'product3DescriptionShort',
            title: 'Product 3 Description Short',
            type: 'string'
        },
        {
            name: 'product3DescriptionLong',
            title: 'Product 3 Description Long',
            type: 'string'
        },
        {
            name: 'product3Image',
            title: 'Product 3 Image',
            type: 'image',
            options: {
              hotspot: true
            }
        },
    ],
  
    preview: {
      select: {
        title: 'title',
      }
    }
  }
  