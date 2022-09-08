import React from 'react'
import Icon from '@mdi/react'
import { mdiGithub, mdiTwitter, mdiLinkedin, mdiEmailOutline } from '@mdi/js'

export default function ContactMe() {
    const iconColor= "rgb(122,92,97)"

    return(
        <div className="contact_me_full">
            <div className="contact_me_content">
                <a href="https://github.com/aishyuu" className="contact_me_icon" aria-label="GitHub" target="_blank" rel="noreferrer">
                    <Icon path={mdiGithub}
                        title="GitHub"
                        size={2}
                        color={iconColor}
                    />
                </a>
                <a href="https://twitter.com/BonnyBonBon_" className="contact_me_icon" aria-label="Twitter" target="_blank" rel="noreferrer">
                    <Icon path={mdiTwitter}
                        title="Twitter"
                        size={2}
                        color={iconColor}
                    />
                </a>
                <a href="https://www.linkedin.com/in/ivan-matias-8171991ba/" className="contact_me_icon" aria-label="LinkedIn" target="_blank" rel="noreferrer">
                    <Icon path={mdiLinkedin}
                        title="Linkedin"
                        size={2}
                        color={iconColor}
                    />
                </a>
                <a href= "mailto: imatiascpp@gmail.com" className="contact_me_icon">
                    <Icon path={mdiEmailOutline}
                        title="Email"
                        size={2}
                        color={iconColor}
                    />
                </a>
            </div>
        </div>
    )
}