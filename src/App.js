import React from 'react'
import './App.css'
import Navbar from './componentes/Navbar.js'
import Testimonio from './componentes/Testimonio'
import datosTestimonios from '../src/data/testimonio.json'

function App () {
  return (
    <div className='App'>

      <header>
        <Navbar />
      </header>

      <main className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre FreeCodeCamp:</h1>

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
