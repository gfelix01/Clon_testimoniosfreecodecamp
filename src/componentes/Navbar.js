import React from 'react'
import '../hojas-de-estilo/Navbar.css' // Estilos del Navbar

function Navbar () {
  const handleNavigation = (event) => {
    event.preventDefault()
   window.location.href = '/' + event.target.id
  }

  return (
    <nav className='navbar'>
      <div className='logo'>
        <img
          src='https://testimonios-gjc.netlify.app/static/media/freecodecamp-logo.5486935b905c7949600c.png'
          alt='FreeCodeCamp Logo'
        />
      </div>
      <ul className='nav-links'>
        <li>
          <button onClick={handleNavigation}>Idiomas</button>
        </li>
        <li>
          <button onClick={handleNavigation}>Menu</button>
        </li>
        <li>
          <button onClick={handleNavigation}>Perfil</button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
