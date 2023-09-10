import React from 'react'
import { Button } from '@mui/material'

import NavBar from '../components/nav_bar'
import pronto from '../assets/soon.png'
import BasicExample from '../components/form'

export const DevolucionPage = () => {
  return (
    <div className='page'>
      <h1 className='page__title'>Hamlin Hamlin & McGill</h1>
      <NavBar />
      <BasicExample/>
    
    </div>

  )
}

export default DevolucionPage