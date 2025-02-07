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
            name: 'heroVideo',
            title: 'Hero Video',
            type: 'file'
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
            name: 'productsTheMeetupTitle',
            title: 'Products The Meetup Title',
            type: 'string'
        },
        {
            name: 'productsTheMeetupDescription',
            title: 'Products The Meetup Description',
            type: 'string'
        },
        {
            name: 'productsTheMeetupImage',
            title: 'Products The Meetup Image',
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
        {
            name: 'whatWeDoBannerTitle',
            title: 'What We Do Banner Title',
            type: 'string'
        },
        {
            name: 'whatWeDoBannerImage',
            title: 'What We Do Banner Image',
            type: 'image',
            options: {
              hotspot: true
            }
        },
        {
            name: 'whatWeDoDescription',
            title: 'What We Do Description',
            type: 'string'
        },
        {
            name: 'servicesBannerTitle',
            title: 'Services Banner Title',
            type: 'string'
        },
        {
            name: 'servicesBannerImage',
            title: 'Services Banner Image',
            type: 'image',
            options: {
              hotspot: true
            }
        },
        {
            name: 'services1Title',
            title: 'Services 1 Title',
            type: 'string'
        },
        {
            name: 'services1Description',
            title: 'Services 1 Description',
            type: 'string'
        },
        {
            name: 'services1Image1',
            title: 'Services 1 Image 1',
            type: 'image',
            options: {
              hotspot: true
            }
        },
        {
            name: 'services1Image2',
            title: 'Services 1 Image 2',
            type: 'image',
            options: {
              hotspot: true
            }
        },
        {
            name: 'services1Image3',
            title: 'Services 1 Image 3',
            type: 'image',
            options: {
              hotspot: true
            }
        },
        {
            name: 'services1Image4',
            title: 'Services 1 Image 4',
            type: 'image',
            options: {
              hotspot: true
            }
        },
        {
            name: 'services2Title',
            title: 'Services 2 Title',
            type: 'string'
        },
        {
            name: 'services2Description',
            title: 'Services 2 Description',
            type: 'string'
        },
        {
            name: 'services2Image1',
            title: 'Services 2 Image 1',
            type: 'image',
            options: {
              hotspot: true
            }
        },
        {
            name: 'services2Image2',
            title: 'Services 2 Image 2',
            type: 'image',
            options: {
              hotspot: true
            }
        },
        {
            name: 'services2Image3',
            title: 'Services 2 Image 3',
            type: 'image',
            options: {
              hotspot: true
            }
        },
        {
            name: 'services2Image4',
            title: 'Services 2 Image 4',
            type: 'image',
            options: {
              hotspot: true
            }
        },
        {
            name: 'services3Title',
            title: 'Services 3 Title',
            type: 'string'
        },
        {
            name: 'services3Description',
            title: 'Services 3 Description',
            type: 'string'
        },
        {
            name: 'services3Image1',
            title: 'Services 3 Image 1',
            type: 'image',
            options: {
              hotspot: true
            }
        },
        {
            name: 'services3Image2',
            title: 'Services 3 Image 2',
            type: 'image',
            options: {
              hotspot: true
            }
        },
        {
            name: 'services3Image3',
            title: 'Services 3 Image 3',
            type: 'image',
            options: {
              hotspot: true
            }
        },
        {
            name: 'services3Image4',
            title: 'Services 3 Image 4',
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
  