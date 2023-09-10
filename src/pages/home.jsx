import React from 'react'

import NavBar from '../components/nav_bar'
import Logocomp from '../assets/HHMlogo.png'
import SideNav from '../components/naipes'
{/*import UncontrolledExample from '../components/carousel'
import { Carousel } from 'react-bootstrap'*/}

export const HomePage = () => {
  return (
    <div className='page'>
      <h1 className='page__title'>Hamlin Hamlin & McGill</h1>
      <NavBar />
      <h2>Página de Inicio</h2>
      <SideNav />
      <img src={Logocomp} height={300} alt='logo usm' /><br />
      <br />
      <div>Bienvenido(a) al exitoso bufete de abogados <i>Hamlin Hamlin & McGill</i></div>
      {/*<UncontrolledExample />*/}
    </div>
    
  )
}

export default HomePage
