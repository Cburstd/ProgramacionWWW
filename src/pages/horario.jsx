import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button} from 'react-bootstrap';
import "../components/horario/style.css"

import NavBar from '../components/nav_bar'
export const HorarioPage = () => {
    return (
      <div className='page'>
        <NavBar />
        <div className='contentContainer padding'>
          <h3>Agendar reunión</h3>
          <div className='mydivcontainer'>
              <div className='mydivhorario' > <h5> <b>Horario</b> </h5> </div>
              <div className='mydivtitle'> <h5><b>Lunes</b></h5>  </div>
              <div className='mydivtitle'> <h5><b>Martes</b></h5> </div>
              <div className='mydivtitle'> <h5><b>Miércoles</b></h5> </div>
              <div className='mydivtitle'> <h5><b>Jueves</b></h5> </div>
              <div className='mydivtitle'> <h5><b>Viernes</b></h5> </div>
              <div className='mydivhora'> 9:00 - 9:45</div>
              <div className='mydivdisp'><b>DISPONIBLE</b></div>
              <div className='mydivdisp'><b>DISPONIBLE</b></div>
              <div className='mydivnodisp'><b>NO DISPONIBLE</b></div>
              <div className='mydivnodisp'><b>NO DISPONIBLE</b></div>
              <div className='mydivdisp'><b>DISPONIBLE</b></div>
              <div className='mydivhora'>10:00 - 10:45</div>
              <div className='mydivdisp'><b>DISPONIBLE</b></div>
              <div className='mydivnodisp'><b>NO DISPONIBLE</b></div>
              <div className='mydivdisp'><b>DISPONIBLE</b></div>
              <div className='mydivnodisp'><b>NO DISPONIBLE</b></div>
              <div className='mydivnodisp'><b>NO DISPONIBLE</b></div>
              <div className='mydivhora'>11:00 - 11:45</div>
              <div className='mydivnodisp'><b>NO DISPONIBLE</b></div>
              <div className='mydivnodisp'><b>NO DISPONIBLE</b></div>
              <div className='mydivdisp'><b>DISPONIBLE</b></div>
              <div className='mydivdisp'><b>DISPONIBLE</b></div>
              <div className='mydivdisp'><b>DISPONIBLE</b></div>
              <div className='mydivhora'>12:00 - 12:45</div>
              <div className='mydivnodisp'><b>NO DISPONIBLE</b></div>
              <div className='mydivdisp'><b>DISPONIBLE</b></div>
              <div className='mydivnodisp'><b>NO DISPONIBLE</b></div>
              <div className='mydivdisp'><b>DISPONIBLE</b></div>
              <div className='mydivdisp'><b>DISPONIBLE</b></div>
              <div className='mydivhora'>14:00 - 14:45</div>
              <div className='mydivdisp'><b>DISPONIBLE</b></div>
              <div className='mydivdisp'><b>DISPONIBLE</b></div>
              <div className='mydivnodisp'><b>NO DISPONIBLE</b></div>
              <div className='mydivnodisp'><b>NO DISPONIBLE</b></div>
              <div className='mydivnodisp'><b>NO DISPONIBLE</b></div>
              <div className='mydivhora'>15:00 - 15:45</div>
              <div className='mydivnodisp'><b>NO DISPONIBLE</b></div>
              <div className='mydivnodisp'><b>NO DISPONIBLE</b></div>
              <div className='mydivdisp'><b>DISPONIBLE</b></div>
              <div className='mydivdisp'><b>DISPONIBLE</b></div>
              <div className='mydivdisp'><b>DISPONIBLE</b></div>
              
          </div>
        </div>
        <div className='boton' align= "right">
            <Button variant='danger' color='error' size='lg' href='/'>Volver al menu</Button>
            <span>&nbsp;</span>
            <Button variant='primary' size='lg' href='/formulario'>Crear reunión</Button>
        </div>
      </div>

    )
  }
  
  export default HorarioPage