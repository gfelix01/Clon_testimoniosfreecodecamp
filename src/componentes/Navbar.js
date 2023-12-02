import React from 'react'
import '../hojas-de-estilo/Navbar.css' // Estilos del Navbar

function Navbar () {
  return (
    <nav className='navbar'>
      <div className='logo'>
        <img
          src='	https://testimonios-gjc.netlify.app/static/media/freecodecamp-logo.5486935b905c7949600c.png' // Ruta a tu logotipo
          alt='FreeCodeCamp Logo' // Texto alternativo para accesibilidad
        />
      </div>
      <ul className='nav-links'>
        {/* Agrega aquí los enlaces para la navegación */}
        {/* Por ejemplo: */}
        <li>
          <a href='#'>Inicio</a>
        </li>
        <li>
          <a href='#'>Cursos</a>
        </li>
        <li>
          <a href='#'>Blog</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
