import React from 'react'
import '../hojas-de-estilo/Testimonio.css'

function Testimonio (props) {
  return (
    <figure className='contenedor-testimonio'>
      <img
        className='imagen-testimonio'
        src={require(`../imagenes/testimonio-${props.imagen}.png`)}
        alt='foto'
      />
      <figcaption className='contenedor-texto-testimonio'>
        <h3 className='nombre-testimonio'>
          <strong>{props.nombre}</strong> en {props.pais}
        </h3>
        <p className='cargo-testimonio'>
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className='texto-testimonio'>
          "{props.testimonio}"
        </p>
      </figcaption>
    </figure>
  )
}

export default Testimonio
