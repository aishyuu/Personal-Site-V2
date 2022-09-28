import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: '5dcyqyta',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2022-09-27'
})