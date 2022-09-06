import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg'
import Icon from "@mdi/react"
import { mdiGithub } from '@mdi/js';
import "../../index.css";

function Navigation() {
    const [isActive, setIsActive] = React.useState(false)

    return(
        <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link to="/" className="navbar-item">
                    <img src={logo} width="112" height="28" alt="home logo" />
                </Link>
                <a onClick={() => {setIsActive(!isActive)}} role="button" className={`navbar-burger burger ${isActive ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
                <div className="navbar-start">

                    <Link to="/blog" className="navbar-item">
                        Blog
                    </Link>
                </div>
                <div className="navbar-end">
                    <div className='navbar-item'>
                        <a className="button is-link" href="https://github.com/aishyuu" target="_blank" rel="noreferrer">
                            Source
                            <Icon path={mdiGithub}
                                title="Github"
                                size={1}
                                className="link-logo"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation