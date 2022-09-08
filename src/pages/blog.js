import Navigation from "../components/navigation/navigation"
import sanityClient from "../client";
import { useEffect, useState } from "react";
import SideInfo from '../components/sideInfo'
import Icon from '@mdi/react'
import { mdiArrowBottomRightBoldBox, mdiGithub } from '@mdi/js'
import { Link } from "react-router-dom";

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
                    project_number,
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
                                    <th classname="blog_desktop">Type</th>
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
                        {isDesktop ? (
                            projects &&
                                projects.sort((firstItem, secondItem) => secondItem.project_number - firstItem.project_number).map((row) => (
                                    <tr>
                                        <td className="table_year">{row["published_at"]}</td>
                                        <td className="table_name">
                                            <Link to={"/post/" + row.url_ending.current} key={row.url_ending.current}> 
                                                {row["title"]} 
                                            </Link>
                                        </td>
                                        <td className="table_type">{row["type"]}</td>
                                        <td className="table_built">{row["tech_stack"]}</td>
                                        <td className="links">
                                            <div>
                                                <a className="table_link" href={row["site_link"]} target="_blank" rel="noreferrer">
                                                    <Icon path={mdiArrowBottomRightBoldBox}
                                                        title="site link"
                                                        size={1}
                                                        color="black"
                                                    />
                                                </a>
                                                <a  className="table_link" href={row["github_link"]} target="_blank" rel="noreferrer">
                                                    <Icon path={mdiGithub}
                                                        title="github link"
                                                        size={1}
                                                        color="black"
                                                    />
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                        ) : (
                            projects &&
                            projects.sort((firstItem, secondItem) => secondItem.project_number - firstItem.project_number).map((row) => (
                                <tr>
                                    <td className="mini_table_year">{row["published_at"]}</td>
                                    <td className="mini_table_name">
                                        <Link to={"/post/" + row.url_ending.current} key={row.url_ending.current}> 
                                            {row["title"]} 
                                        </Link>
                                    </td>
                                    <td className="links">
                                        <div>
                                            <a className="table_link" href={row["site_link"]} target="_blank" rel="noreferrer">
                                                <Icon path={mdiArrowBottomRightBoldBox}
                                                    title="site link"
                                                    size={1}
                                                    color="black"
                                                />
                                            </a>
                                            <a  className="table_link" href={row["github_link"]} target="_blank" rel="noreferrer">
                                                <Icon path={mdiGithub}
                                                    title="github link"
                                                    size={1}
                                                    color="black"
                                                />
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                            )) 
                        )}
                </table>
            </div>
        </div>
    )
}

export default Blog