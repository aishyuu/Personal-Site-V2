import React, {useState, useEffect} from 'react';
import project from "../images/WaToDo.png";

function FeaturedProjects() {
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
                        <li className="featured-projects-item">
                            <div className="project-item-content">
                                <div>
                                    <p class="project-overline">Featured Project</p>
                                    <h3 className="project-title">
                                        WaToDo
                                    </h3>
                                </div>
                                <div className="project-description">
                                    <p>A fullstack todo list app that lets users create their own ToDo list by modifying the URL</p>
                                </div>
                                <ul className="project-tech-list">
                                    <li className="tech-item">MongoDB</li>
                                    <li className="tech-item">Express.js</li>
                                    <li className="tech-item">React</li>
                                    <li className="tech-item">Node.js</li>
                                </ul>
                            </div>
                            <div className="project-image-container">
                                <img className="project-image" aria-hidden="true" src={project} alt="project screenshot" />
                            </div>
                        </li>
                    </ul>
                ): (
                    <ul className="mini-featured-projects-list">
                        <li className="mini-featured-projects-item">
                            <div className="mini-project-item-content">
                                <div>
                                    <p className="mini-project-overline">Featured Project</p>
                                    <h3 className="mini-project-title">
                                        WaToDo
                                    </h3>
                                    <div className="mini-project-description">
                                        <p>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
                                    </div>
                                    <ul className="mini-project-tech-list">
                                        <li className="mini-project-tech-item">VS Code</li>
                                        <li className="mini-project-tech-item">Sublime Text</li>
                                        <li className="mini-project-tech-item">Atom</li>
                                        <li className="mini-project-tech-item">iTerm2</li>
                                        <li className="mini-project-tech-item">Hyper</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mini-project-image-container">
                                <img className="mini-project-image" aria-hidden="true" src={project} alt="project screenshot" />
                            </div>
                        </li>
                    </ul>
                )}
            </div>   
        </div>
    )
}

export default FeaturedProjects