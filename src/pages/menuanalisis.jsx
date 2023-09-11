import React from 'react'
import "../components/horario/style.css"
import NavBar from '../components/nav_bar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button} from 'react-bootstrap';

export const MenuAnalisisPage = () => {
  return (
    <div className='page'>
      <NavBar />
      <h2>Reuniones pasadas</h2>
      <div className='columnasdobles'>
        <div className='nombres'>
            <div className='lista' align='left'><h4> - Analisis de datos, 23/11/2022</h4></div>
            <div className='lista' align='left'><h4> - Resumen mes, 21/11/2022</h4></div>
            <div className='lista' align='left'><h4> - Retroalimentación proyecto, 12/11/2022</h4></div>
            <div className='lista' align='left'><h4> - Practicas, 05/11/2022</h4></div>
            <div className='lista' align='left'><h4> - Nomina proyectos, 28/10/2022</h4></div>
        </div>
        <div className='botones'>
            <div className='boton' align="right">
                <Button variant='primary' size='lg' href='/Analisis'>Analisis reunion</Button>
            </div>
            <div className='boton' align="right">
                <Button variant='primary' size='lg' href='/Analisis2'>Analisis reunion</Button>
            </div>
            <div className='boton' align="right">
                <Button variant='primary' size='lg' href='/Analisis3'>Analisis reunion</Button>
            </div>
            <div className='boton' align="right">
                <Button variant='primary' size='lg' href='/Analisis4'>Analisis reunion</Button>
            </div>
            <div className='boton' align="right">
                <Button variant='primary' size='lg' href='/Analisis5'>Analisis reunion</Button>
            </div>
        </div>
      </div>
      <div className='boton' align= "right">
            <Button variant='danger' color='error' size='lg' href='/'>Volver al menu</Button>
        </div>
    </div>
  )
}

export default MenuAnalisisPage