import Icon from '@mdi/react'
import { mdiSquareRoundedBadgeOutline, mdiGithub, mdiPost } from '@mdi/js'

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
                <div className="project-links">
                    <a href={props.links[0]} className="project-link-item">
                        <Icon path={mdiSquareRoundedBadgeOutline}
                            title="site link"
                            size={1}
                            color="black"
                        />
                    </a>
                    <a href={props.links[1]} className="project-link-item">
                        <Icon path={mdiGithub}
                            title="github link"
                            size={1}
                            color="black"
                        />
                    </a>
                    <a href={props.links[2]} className="project-link-item">
                        <Icon path={mdiPost}
                            title="blog link"
                            size={1}
                            color="black"
                        />
                    </a>
                </div>
            </div>
            <div className="project-image-container">
                <img className="project-image" aria-hidden="true" src={props.image} alt="project screenshot" />
            </div>
        </li>
    )
}

export default FeaturedProjectFull;