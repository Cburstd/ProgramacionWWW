import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button} from 'react-bootstrap';
import "../components/horario/style.css"

import NavBar from '../components/nav_bar'

export const AnalisisPage = () => {
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
            <div className='a'>Analisis de datos</div>
            <div className='a'>23 de noviembre de 2022</div>
            <div className='a'>12 hrs. 00 mín.</div>
            <div className='a'>01 hrs. 20 mín.</div>
            <div className='a'>Datos, Planillas, Excel, Organización</div>
        </div>
      </div>
      <h5> <b>Participantes</b> </h5>
      <div className='anal'>
        <div>
            <ul>
                <li>Ana Lopez </li>
                <li>Juan Perez</li>
                <li>Pedro Parra</li>
                <li>Rosa Vasquez</li>
                <li>Susana Horia</li>

            </ul>
        </div>
        <div>
            <div className='a'> <b>Hora conexión:</b> 12 hrs. 00 min. </div>
            <div className='a'> <b>Hora conexión:</b> 12 hrs. 00 min. </div>
            <div className='a'> <b>Hora conexión:</b> 12 hrs. 01 min. </div>
            <div className='a'> <b>Hora conexión:</b> 12 hrs. 02 min. </div>
            <div className='a'> <b>Hora conexión:</b> 12 hrs. 05 min. </div>
        </div>

      </div>

    <div><h5> <b>Acta reunión</b> </h5>
        <div className='textoacta'>
            Se revisan y discuten los datos de los casos atendidos durante la última semana. Se decide que estos datos serán almacenados en planillas en Excel que contengan los casos de cada semana. Cada archivo contendrá 5 hojas, correspondientes a cada día laboral, con el objetivo de mejorar la organización de los datos.
        </div>
    </div>
      <div className='boton' align= "right">
        <Button variant='danger' color='error' size='lg' href='/menuanalisis'>Volver</Button>
      </div>
    </div>
  )
}

export default AnalisisPage