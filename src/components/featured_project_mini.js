import Icon from '@mdi/react';
import { mdiSquareRoundedBadgeOutline, mdiGithub, mdiPost } from '@mdi/js';

function FeaturedProjectMini(props) {
	return (
		<li className="mini-featured-projects-item">
			<div className="mini-project-item-content">
                <div>
                    <p className="mini-project-overline">Featured Project</p>
                    <h3 className="mini-project-title">{props.project_title}</h3>
                    <div className="mini-project-description">
                        <p>{props.project_description}</p>
                    </div>
                    <ul className="mini-project-tech-list">
                        {props.tech_stack.map((tech) => (
                            <li className="tech-item">{tech}</li>
                        ))}
                    </ul>
                    <div className="project-links-mini">
                        <a href={props.links[0]} className="project-link-item" target="_blank" rel="noreferrer">
                            <Icon
                                path={mdiSquareRoundedBadgeOutline}
                                title="site link"
                                size={1}
                                color="white"
                            />
                        </a>
                        <a href={props.links[1]} className="project-link-item" target="_blank" rel="noreferrer">
                            <Icon path={mdiGithub} title="github link" size={1} color="white" />
                        </a>
                        <a href={props.links[2]} className="project-link-item" target="_blank" rel="noreferrer">
                            <Icon path={mdiPost} title="blog link" size={1} color="white"/>
                        </a>
                    </div>
                </div>
            </div>
			<div className="mini-project-image-container">
				<img
					className="mini-project-image"
					aria-hidden="true"
					src={props.image}
					alt="project-screenshot"
				/>
			</div>
		</li>
	);
}

export default FeaturedProjectMini;
