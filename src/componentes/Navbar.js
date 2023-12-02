import React from 'react';
import '../hojas-de-estilo/Navbar.css'; // Estilos del Navbar

function Navbar() {
  const handleNavigation = (event) => {
    event.preventDefault();
    // Aquí puedes definir lo que deseas que haga cada enlace al ser clicado
    // Por ejemplo: redirigir a otra página o ejecutar una acción
  };

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
          <button onClick={handleNavigation}>Inicio</button>
        </li>
        <li>
          <button onClick={handleNavigation}>Cursos</button>
        </li>
        <li>
          <button onClick={handleNavigation}>Blog</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
