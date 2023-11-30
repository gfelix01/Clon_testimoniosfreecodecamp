import './App.css'
import Testimonio from './componentes/Testimonio'

function App () {
  return (
    <main className='App'>
      <section className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre FreeCodeCamp:</h1>
        <Testimonio
          nombre='Gabriel Felix '
          pais='Republica Dominicana'
          imagen='gabriel'
          cargo='Software Developer'
          empresa='Devkoore'
          testimonio='La persistencia es mi mejor aliada en mi camino de aprendizaje, aunque siempre he enfrentado dificultades. Mi meta es convertirme en el mejor programador de software del mundo, y confío en que, con la guía de Dios, podré alcanzarla. Cada obstáculo es una oportunidad para crecer, y estoy comprometido a superarlos con determinación y dedicación.'
        />

        <Testimonio
          nombre='Sarah Chima'
          pais='Nigeria'
          imagen='sara'
          cargo='Software Developer'
          empresa='ChatDesk'
          testimonio='Los valores son pilares fundamentales que guían mis acciones y decisiones en la vida. La integridad es el cimiento sobre el cual construyo mis relaciones, siempre buscando la honestidad y la transparencia'
        />

        <Testimonio
          nombre='Shawn Wang'
          pais='Singapur'
          imagen='shawn'
          cargo='Software Developer'
          empresa='Amazon'
          testimonio='"Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida." '
        />
      </section>
    </main>
  )
}

export default App
