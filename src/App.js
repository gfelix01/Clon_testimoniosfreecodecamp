import React from 'react'
import './App.css' // Estilos globales si los tienes
import Navbar from './componentes/Navbar.js' // Importa tu componente Navbar
import Testimonio from './componentes/Testimonio'
import datosTestimonios from './componentes/datosTestimonios.js' // Importa los datos de testimonios

function App () {
  return (
    <div className='App'>
      {/* Navbar en el encabezado */}
      <header>
        <Navbar />
      </header>

      {/* Contenido principal */}
      <main className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre FreeCodeCamp:</h1>

        {/* Mapeo de datos para renderizar los testimonios */}
        {datosTestimonios.map((testimonio, index) => (
          <Testimonio
            key={index}
            nombre={testimonio.nombre}
            pais={testimonio.pais}
            imagen={testimonio.imagen}
            cargo={testimonio.cargo}
            empresa={testimonio.empresa}
            testimonio={testimonio.testimonio}
          />
        ))}
      </main>
    </div>
  )
}

export default App
