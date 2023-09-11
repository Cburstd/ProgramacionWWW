import React from 'react'

import NavBar from '../components/nav_bar'
import Logocomp from '../assets/HHMlogo.png'
import LogoCC from '../assets/cc.png'
import LogoBiblo from '../assets/biblo.png'
import { Carousel } from 'react-bootstrap'
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
      
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100 mx-auto" src={LogoCC} alt="First slide"/>
          <Carousel.Caption>
            <h3>Primer Slide</h3>
            <p>Texto de prueba</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 mx-auto" src={LogoBiblo} alt="Second slide"/>
          <Carousel.Caption>
            <h3>Segundo Slide</h3>
            <p>Texto de prueba</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  
    </div>
    
  )
}

export default HomePage
