import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/LogoJahnvi.jpg'
// import LogoS from '../../assets/images/LogoJ'
// import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faGithub, faTwitter
  } from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons'

import React from 'react'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo"/>
            {/* <img className="sub-logo" src={LogoSubtitle} alt="slobodan"/> */}
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
           <li>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jahnvi-khanduja-220387231/">
                <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
            </a>
           </li>
           <li>
            <a target="_blank" rel="noreferrer" href="https://github.com/JahnviKhanduja">
                <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
            </a>
           </li>
           <li>
            <a target="_blank" rel="noreferrer" href="https://twitter.com/JahnviK278">
                <FontAwesomeIcon icon={faTwitter} color='#4d4d4e' />
            </a>
           </li>

        </ul>

    </div>
)

export default Sidebar
