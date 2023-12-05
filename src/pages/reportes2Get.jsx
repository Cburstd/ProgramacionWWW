import React from 'react'
import { Button } from '@mui/material'

import NavBar from '../components/nav_bar'
import pronto from '../assets/soon.png'
import FormProfe from '../components/formProfe'
import FormProfeConsulta from '../components/formProfeConsulta'

export const ReportesPage2 = () => {
  
  return (
    <div className='page'>
      <h1 className='page__title'>Hamlin Hamlin & McGill</h1>
      <NavBar />
      <FormProfe /> <br /><br /><br /><br /><br /><br />
      <FormProfeConsulta />
    </div>

  )
}

export default ReportesPage2