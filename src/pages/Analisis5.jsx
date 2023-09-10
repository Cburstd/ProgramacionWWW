import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button} from 'react-bootstrap';
import "../components/horario/style.css"

import NavBar from '../components/nav_bar'

export const AnalisisPage5 = () => {
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
            <div className='a'>Nomina proyectos</div>
            <div className='a'>28/10/2022</div>
            <div className='a'>12 hrs. 00 min.</div>
            <div className='a'>01 hrs.  57 mín.</div>
            <div className='a'>Proyectos, Nuevos Proyectos, Testing, Usabilidad</div>
        </div>
      </div>
      <h5> <b>Participantes</b> </h5>
      <div className='anal'>
        <div>
            <ul>
                <li>Ana Lopez </li>
                <li>Susana Horia</li>
                <li>Pedro Parra</li>
                <li>Mario Neta</li>
                <li>Elvis tek</li>
                <li>Rosa Vasquez</li>
                <li>Walter White</li>

            </ul>
        </div>
        <div>
            <div className='a'> <b>Hora conexión:</b> 12 hrs. 00 min. </div>
            <div className='a'> <b>Hora conexión:</b> 12 hrs. 01 min. </div>
            <div className='a'> <b>Hora conexión:</b> 12 hrs. 03 min. </div>
            <div className='a'> <b>Hora conexión:</b> 12 hrs. 03 min. </div>
            <div className='a'> <b>Hora conexión:</b> 12 hrs. 04 min. </div>
            <div className='a'> <b>Hora conexión:</b> 12 hrs. 05 min. </div>
            <div className='a'> <b>Hora conexión:</b> 12 hrs. 06 min. </div>
        </div>

      </div>

    <div><h5> <b>Acta reunión</b> </h5>
        <div className='textoacta'>
            Se revisan los resumenes de los proyectos terminados este mes y se reciben los que se realizarán durante el próximo mes. Se realiza testing de aceptación y usabilidad de aquellos proyectos que se encuentran en desarrollo.
        </div>
    </div>
      <div className='boton' align= "right">
        <Button variant='danger' color='error' size='lg' href='/menuanalisis'>Volver</Button>
      </div>
    </div>
  )
}

export default AnalisisPage5