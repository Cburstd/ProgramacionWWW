import React from 'react'
import { Button } from '@mui/material'

import NavBar from '../components/nav_bar'
import pronto from '../assets/soon.png'
import FormReporte from '../components/formReporte'
import FormReporteGet from '../components/formReporteGet'

export const ReportesPage = () => {
  
  return (
    <div className='page'>
      <h1 className='page__title'>Hamlin Hamlin & McGill</h1>
      <NavBar />
      <FormReporte /> <br /><br /><br /><br />
      <FormReporteGet />
      {/* <FormProfe /> */}
      {/* <FormProfeConsulta /> */}
    </div>

  )
}

export default ReportesPage