import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import sanityClient from '../client'
import Navigation from '../components/navigation/navigation'
import Markdown from 'markdown-to-jsx'
import ContactMe from '../components/contactMe'
import SideInfo from '../components/sideInfo'


export default function SinglePost() {
    const [singlePost, setSinglePost] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
            sanityClient.fetch(`*[slug.current == "${slug}"]{
                title,
                type,
                tech_stack,
                main_image{
                    asset->{
                        _id,
                        url
                    },
                },
                published_at,
                body,
                site_link,
                github_link
            }`
        )
        .then((data) => {
            setSinglePost(data[0])})
        .catch(console.error);
   
    }, [slug])

    console.log(singlePost);

    if(!singlePost) return <div>Loading...</div>

    return(
        <div>
            <Navigation />
            <SideInfo />
            <div className="single_post_header">
                <h1>{singlePost.title}</h1>
            </div>
            <div className="single_post_content">
                <Markdown>{singlePost.body}</Markdown>
            </div>
            <ContactMe />
        </div>
    )
}
