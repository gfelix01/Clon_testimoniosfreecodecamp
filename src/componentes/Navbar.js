import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faGlobe, faBars, faUser } from '@fortawesome/free-solid-svg-icons'

import '../hojas-de-estilo/Navbar.css'

const NavigationLink = ({ href, icon, text }) => {
  const handleNavigation = (event) => {
    event.preventDefault()
    window.location.href = href
  }

  return (
    <li>
      <a href={href} onClick={handleNavigation}>
        {text}
        <FontAwesomeIcon icon={icon} />
      </a>
    </li>
  )
}

function Navbar () {
  return (
    <nav className='navbar'>
      <div className='search-bar'>
        <FontAwesomeIcon  id ="icon-search" icon={faSearch} />
        <input className='input-text' type='text' placeholder='Search 9,000+ tutorials' />
      </div>
      <div className='logo'>
        <img
          src='https://testimonios-gjc.netlify.app/static/media/freecodecamp-logo.5486935b905c7949600c.png'
          alt='FreeCodeCamp Logo'
        />
      </div>
      <div />
      <ul className='nav-links'>
        <NavigationLink href='/idiomas' icon={faGlobe} text='' />
        <NavigationLink href='/menu' icon={faBars} text='' />
        <NavigationLink href='/perfil' icon={faUser} text='' />
      </ul>
    </nav>
  )
}

export default Navbar
