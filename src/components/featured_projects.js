import project from "../images/WaToDo.png";

function FeaturedProjects() {
    return(
        <div className="featured-projects-container">
            <div className="featured-projects-content">
                <h2 class="featured-projects-heading">
                    Some Things I've Built
                </h2>
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
                            <img className="project-image" aria-hidden="true" src={project} />
                        </div>
                    </li>
                </ul>
            </div>   
        </div>
    )
}

export default FeaturedProjects