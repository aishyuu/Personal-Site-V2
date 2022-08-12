import "../index.css"
import Typewriter from 'typewriter-effect'
import Icon from "@mdi/react"
import { mdiGithub } from '@mdi/js';
import { mdiLinkedin } from '@mdi/js';

function Welcome() {
    return(
        <div className="welcome-container">
            <h2 className="welcome-text-1">Hey there! I'm -</h2>
            <h1 className="welcome-text-2">Ivan Matias</h1>
            <div className="welcome-text-1">
                <Typewriter
                    options={{
                        strings: ["Front-End Developer", "Web Developer", "Self Taught Developer"],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>
            <br />
            <div className="welcome-text-1">
                <h1>Exploring opportunities and side projects</h1>
                <h1>Currently looking for job opportunities</h1>
            </div>
            <br />
            <div className="buttons">
                <a className="button is-info" href="https://github.com/aishyuu">
                    Github
                    <Icon path={mdiGithub}
                        title="Github"
                        size={1}
                        className="link-logo"
                    />
                </a>
                <a className="button is-info" href="https://www.linkedin.com/in/ivan-matias-8171991ba/">
                    linkedin
                    <Icon path={mdiLinkedin}
                        title="LinkedIn"
                        size={1}
                        className="link-logo"
                    />
                </a>
            </div>
        </div>
    )
}

export default Welcome