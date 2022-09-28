import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: '5dcyqyta',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2022-08-08'
})