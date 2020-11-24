const sanityClient = require('@sanity/client')
export const client = sanityClient({
  projectId: 'lagsmzsb',
  dataset: 'production',
  useCdn: true
})