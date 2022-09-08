import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import sanityClient from '../client'
import Navigation from '../components/navigation/navigation'


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
        .then((data) => setSinglePost(data[0]))
        .catch(console.error);
    }, [slug])

    console.log(singlePost);

    if(!singlePost) return <div>Loading...</div>

    return(
        <div>
            <Navigation />
            <div>
                <h2>{singlePost.title}</h2>
            </div>
        </div>
    )
}
