import React from 'react'
import { Button } from '@mui/material'

import NavBar from '../components/nav_bar'
import pronto from '../assets/soon.png'
import BasicExample from '../components/form'

export const PrestamoPage = () => {
  return (
    <div className='page'>
      <h1 className='page__title'>Hamlin Hamlin & McGill</h1>
      <NavBar />
      <h2>Sobre nosotros</h2>
      <img src={pronto} height={200} alt='logo usm' /><br />
      
      <br />
      <Button variant='contained'>Material UI Button</Button>
      
    
    </div>

  )
}

export default PrestamoPage