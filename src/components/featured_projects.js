import React, {useState, useEffect} from 'react';
import Project_Set from "../data/featured-projects.json"
import FeaturedProjectFull from './featured_project_full';
import FeaturedProjectMini from './featured_project_mini';

function FeaturedProjects() {
    console.log(Project_Set);
    const [isDesktop, setDesktop] = useState(window.innerWidth > 1080);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 1080);
        console.log(isDesktop);
    };

    useEffect(() => {
        window.addEventListener('resize', updateMedia);
        return () => window.removeEventListener('resize', updateMedia);
    });

    return(
        <div className="featured-projects-container">
            <div className="featured-projects-content">
                <h2 className="featured-projects-heading">
                    Some Things I've Built
                </h2>
                {isDesktop ? (
                    <ul className="featured-projects-list">
                        {Project_Set.map((project) => (
                            <FeaturedProjectFull 
                                project_title = {project.Project_Title}
                                project_description = {project.Project_Description}
                                tech_stack = {project.Project_Tech_List}
                                image = {project.Image}
                            />
                        ))}
                    </ul>
                ): (
                    <ul className="mini-featured-projects-list">
                        {Project_Set.map((project) => (
                            <FeaturedProjectMini
                                project_title = {project.Project_Title}
                                project_description = {project.Project_Description}
                                tech_stack = {project.Project_Tech_List}
                                image = {project.Image}
                            />
                        ))}
                    </ul>
                )}
            </div>   
        </div>
    )
}

export default FeaturedProjects