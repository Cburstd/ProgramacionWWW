import React from 'react'

import NavBar from '../components/nav_bar'
import Logocomp from '../assets/HHMlogo.png'
import LogoCC from '../assets/cc.png'
import LogoBiblo from '../assets/biblo.jpg'
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
          <div className="carousel-image" style={{ backgroundImage: `url(${LogoCC})` }}></div>
          <Carousel.Caption>
            <h3>Primer Slide</h3>
            <p>Texto de prueba</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-image" style={{ backgroundImage: `url(${LogoBiblo})` }}></div>
          <Carousel.Caption>
            <h3>Segundo Slide</h3>
            <p>Texto de prueba</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <div className="card">
              <img className="rounded-circle" src={LogoCC} alt="Generic placeholder image" width="140" height="140"/>
              <h2>C&aacute;talogo de Libros</h2>
              <p>En el siguiente link podras encontrar todos los libros de c&aacute;talogo que tenemos disponibles</p>
              <p><a className="btn btn-dark" href="#" role="button">Ver detalles &raquo;</a></p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card"> 
              <img className="rounded-circle" src={LogoCC} alt="Generic placeholder image" width="140" height="140"/>
              <h2>C&aacute;talogo de Equipos</h2>
              <p>En el siguiente link podras encontrar todos los equipos de c&aacute;talogo que tenemos disponibles</p>
              <p><a className="btn btn-dark" href="#" role="button">Ver detalles &raquo;</a></p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <img className="rounded-circle" src={LogoCC} alt="Generic placeholder image" width="140" height="140"/>
              <h2>C&aacute;talogo de Herramientas</h2>
              <p>En el siguiente link podras encontrar todas las herramientas de c&aacute;talogo que tenemos disponibles</p>
              <p><a className="btn btn-dark" href="#" role="button">Ver detalles &raquo;</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default HomePage
