import React from 'react'

import NavBar from '../components/nav_bar'
import Logocomp from '../assets/HHMlogo.png'
import SideNav from '../components/naipes'
{/*import UncontrolledExample from '../components/carousel'
import { Carousel } from 'react-bootstrap'*/}

export const HomePage = () => {
  return (
    <div className='page'>
      <div className="d-flex align-items-center">
        <img src={Logocomp} alt='Logo' className='logo' />
        <h1 className='page__title'>HHM</h1>
      </div>
      <NavBar />
      <h2>Página de Inicio</h2>
    </div>
    
  )
}

export default HomePage
