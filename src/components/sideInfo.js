import Icon from '@mdi/react'
import { mdiGithub, mdiTwitter, mdiLinkedin, mdiEmailOutline } from '@mdi/js';
import "../index.css"

function SideInfo() {
    const iconColor = "rgb(122,92,97)"

    return(
        <div className="sidebar-container">
            <ul className="links-list-container">
                <li>
                    <a href="https://github.com/aishyuu" aria-label="GitHub" target="_blank" rel="noreferrer">
                        <Icon path={mdiGithub}
                            title="GitHub"
                            size={1}
                            color={iconColor}
                        />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/BonnyBonBon_" aria-label="Twitter" target="_blank" rel="noreferrer">
                        <Icon path={mdiTwitter}
                            title="Twitter"
                            size={1}
                            color={iconColor}
                        />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/ivan-matias-8171991ba/" aria-label="LinkedIn" target="_blank" rel="noreferrer">
                        <Icon path={mdiLinkedin}
                            title="Linkedin"
                            size={1}
                            color={iconColor}
                        />
                    </a>
                </li>
                <li className="final-link">
                    <a href= "mailto: imatiascpp@gmail.com">
                        <Icon path={mdiEmailOutline}
                            title="Email"
                            size={1}
                            color={iconColor}
                        />
                    </a>
                </li>
            </ul>
            <div id="rectangle"></div>
        </div>
    )
}

export default SideInfo