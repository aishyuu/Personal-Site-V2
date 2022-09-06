import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '@sanity/client';
import BlockContent from '@sanity/block-content-to-react'
import ImageUrlBuilder from '@sanity/image-url';

const builder = ImageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}

export default function SinglePost() {
    const [postData, setPostData] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        sanityClient
            .fetch(
                `*[slug.current == $slug] {
                    title,
                    slug,
                    body,
                    mainImage{
                        asset->{
                            _id,
                            url
                        }
                    },

                }`,
                    {slug}
            )
            .then((data) => setPostData(data))
            .catch(console.error);
    }, [slug]);

    console.log(postData);
    if(!postData) return <div>Loading...</div>

    
    return(
        <div>
            <div>
                <h2>post</h2>
            </div>
        </div>
    )
}
