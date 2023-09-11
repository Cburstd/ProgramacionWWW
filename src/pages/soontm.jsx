import React from 'react'
import { Button } from '@mui/material'

import NavBar from '../components/nav_bar'
import pronto from '../assets/soon.png'

export const SoonPage = () => {
  return (
    <div className='page'>
      <NavBar />
      <h2>Asesorías legales</h2>
      <img src={pronto} height={200} alt='logo usm' /><br />
      <br />
      <Button variant='contained'>Material UI Button</Button>
    </div>
  )
}

export default SoonPage