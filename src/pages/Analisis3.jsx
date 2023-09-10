import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button} from 'react-bootstrap';
import "../components/horario/style.css"

import NavBar from '../components/nav_bar'

export const AnalisisPage3 = () => {
  return (
    <div className='page'>
      <NavBar />
      <h2>Analisis de reunión</h2>
      <div className='anal'>
        <div>
            <ul>
                <li><b>Nombre reunión:</b></li>
                <li><b>Fecha reunión:</b></li>
                <li><b>Hora reunión:</b></li>
                <li><b>Duración:</b></li>
                <li><b>Temas tratados:</b></li>
            </ul>
        </div>
        <div>
            <div className='a'>Retroalimentación proyecto</div>
            <div className='a'>12/11/2022</div>
            <div className='a'>09 hrs. 00 mín.</div>
            <div className='a'>01 hrs. 30 mín.</div>
            <div className='a'>Proyectos, Fallas, Mockups, Testing</div>
        </div>
      </div>
      <h5> <b>Participantes</b> </h5>
      <div className='anal'>
        <div>
            <ul>
                <li>Ana Lopez </li>
                <li>Walter White</li>
                <li>Pedro Parra</li>
                <li>Rosa Vasquez</li>

            </ul>
        </div>
        <div>
            <div className='a'> <b>Hora conexión:</b> 09 hrs. 00 min. </div>
            <div className='a'> <b>Hora conexión:</b> 09 hrs. 02 min. </div>
            <div className='a'> <b>Hora conexión:</b> 09 hrs. 04 min. </div>
            <div className='a'> <b>Hora conexión:</b> 09 hrs. 05 min. </div>
        </div>

      </div>

    <div><h5> <b>Acta reunión</b> </h5>
        <div className='textoacta'>
            Cada participante realiza un resumen de los proyectos en los que se encuentra trabajando, recibiendo retroalimentación para aquellos proyectos que presentan fallas. También muestran los mockups y tipos de testing que han hecho.
        </div>
    </div>
      <div className='boton' align= "right">
        <Button variant='danger' color='error' size='lg' href='/menuanalisis'>Volver</Button>
      </div>
    </div>
  )
}

export default AnalisisPage3