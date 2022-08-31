import Navigation from "../components/navigation/navigation"
import sanityClient from "../client";
import { useEffect, useState } from "react";
import SideInfo from '../components/sideInfo'

function Blog() {
    const [projects, setProjects] = useState(null);
    const [isDesktop, setDesktop] = useState(window.innerWidth > 1080);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 1080);
    };

    useEffect(() => {
        window.addEventListener('resize', updateMedia);
        return () => window.removeEventListener('resize', updateMedia);
    })
    
    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "post"]{
                    title,
                    url_ending,
                    type,
                    tech_stack,
                    main_image{
                        asset->{
                            _id,
                            url
                        },
                    },
                    published_at,
                    finished,
                    site_link,
                    github_link
                }`
            )
            .then((data) => setProjects(data))
            .catch(console.error);
    }, []);
    
    console.log(projects);
    return(
        <div className="blog_landing">
            <Navigation />
            <SideInfo />
            <div className="blog_content">
                <h1 className="blog_heading">Blog</h1>
                <p className="blog_subtitle">All the documentation I've written for every project I've worked on. Even the things I'm working on right now!</p>
                <table>
                    <thead>
                            {isDesktop ? (
                                <tr>
                                    <th>Date</th>
                                    <th>Project</th>
                                    <th classname="blog_desktop">Status</th>
                                    <th className="blog_desktop">Built With</th>
                                    <th>Link</th>
                                </tr>
                            ) : (
                                <tr>
                                    <th>Date</th>
                                    <th>Project</th>
                                    <th>Link</th>
                                </tr>
                            )}
                    </thead>
                </table>
            </div>
        </div>
    )
}

export default Blog