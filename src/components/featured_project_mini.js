function FeaturedProjectMini(props) {
    return(
        <li className="mini-featured-projects-item">
            <div className="mini-project-item-content">
                <p className="mini-project-overline">Featured Project</p>
                <h3 className="mini-project-title">
                    {props.project_title}
                </h3>
                <div className="mini-project-description">
                    <p>{props.project_description}</p>
                </div>
                <ul className="mini-project-tech-list">
                    {props.tech_stack.map((tech) => (
                        <li className="tech-item">{tech}</li>
                    ))}
                </ul>
            </div>
            <div className="mini-project-image-container">
                <img className="mini-project-image" aria-hidden="true" src={props.image} alt="project-screenshot" />
            </div>
        </li>
    )
}

export default FeaturedProjectMini