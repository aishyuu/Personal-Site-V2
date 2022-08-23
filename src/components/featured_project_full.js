function FeaturedProjectFull(props) {
    return(
        <li className="featured-projects-item">
            <div className="project-item-content">
                <div>
                    <p className="project-overline">Featured Project</p>
                    <h3 className="project-title">
                        {props.project_title}
                    </h3>
                </div>
                <div className="project-description">
                    <p>{props.project_description}</p>
                </div>
                <ul className="project-tech-list">
                    {props.tech_stack.map((tech) => (
                        <li className="tech-item">{tech}</li>
                    ))}
                </ul>
            </div>
            <div className="project-image-container">
                <img className="project-image" aria-hidden="true" src={props.image} alt="project screenshot" />
            </div>
        </li>
    )
}

export default FeaturedProjectFull;