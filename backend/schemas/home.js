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
        {
            name: 'productsStudioETitle',
            title: 'Products Studio E Title',
            type: 'string'
        },
        {
            name: 'productsStudioEDescription',
            title: 'Products Studio E Description',
            type: 'string'
        },
        {
            name: 'productsStudioEImage',
            title: 'Products Studio E Image',
            type: 'image',
            options: {
              hotspot: true
            }
        },
        {
            name: 'productsMPStudioTitle',
            title: 'Products MP Studio Title',
            type: 'string'
        },
        {
            name: 'productsMPStudioDescription',
            title: 'Products MP Studio Description',
            type: 'string'
        },
        {
            name: 'productsMPStudioImage',
            title: 'Products MP Studio Image',
            type: 'image',
            options: {
              hotspot: true
            }
        },
        {
            name: 'productsPodcastLoungeTitle',
            title: 'Products Podcast Lounge Title',
            type: 'string'
        },
        {
            name: 'productsPodcastLoungeDescription',
            title: 'Products Podcast Lounge Description',
            type: 'string'
        },
        {
            name: 'productsPodcastLoungeImage',
            title: 'Products Podcast Lounge Image',
            type: 'image',
            options: {
              hotspot: true
            }
        },
        {
            name: 'productsAudioStudioTitle',
            title: 'Products Audio Studio Title',
            type: 'string'
        },
        {
            name: 'productsAudioStudioDescription',
            title: 'Products Audio Studio Description',
            type: 'string'
        },
        {
            name: 'productsAudioStudioImage',
            title: 'Products Audio Studio Image',
            type: 'image',
            options: {
              hotspot: true
            }
        },
        {
            name: 'productsEquipmentTitle',
            title: 'Products Equipment Title',
            type: 'string'
        },
        {
            name: 'productsEquipmentDescription',
            title: 'Products Equipment Description',
            type: 'string'
        },
        {
            name: 'productsEquipmentImage',
            title: 'Products Equipment Image',
            type: 'image',
            options: {
              hotspot: true
            }
        },
        {
            name: 'productsWorkstationTitle',
            title: 'Products Workstation Title',
            type: 'string'
        },
        {
            name: 'productsWorkstationDescription',
            title: 'Products Workstation Description',
            type: 'string'
        },
        {
            name: 'productsWorkstationImage',
            title: 'Products Workstation Image',
            type: 'image',
            options: {
              hotspot: true
            }
        },
        {
            name: 'productsVirtualSolutionsText',
            title: 'Products Virtual Solutions Text',
            type: 'string'
        },
    ],
  
    preview: {
      select: {
        title: 'title',
      }
    }
  }
  