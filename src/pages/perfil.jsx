import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import LogoUser from  '../assets/saul.png';
import { Button} from 'react-bootstrap';
import "../components/horario/style.css"
import NavBar from '../components/nav_bar'

export const Perfil = () => {
  return (
    <div className='page'>
      <div className="d-flex align-items-center">
        <img src={Logocomp} alt='Logo' className='logo' />
        <h1 className='page__title'>HHM</h1>
      </div>
      <NavBar />
      <h2>Mi Perfil</h2>

      <div className="container">
        <div className="row">
          <div className="col-4">
            <img src={LogoUser} className="img-fluid" />
          </div>
          <div className="col-8">
            <div className="card-body text-end">
              <h5 className="card-title">Nombre</h5>
              <p className="card-text">Correo</p>
              <p className="card-category">Contraseña</p>
              <p className="card-category">Telefono</p>
              <p className="card-category">Dirección</p>
              <p className="card-category">Carrera</p>
              <p className="card-category">Semestre</p>
              <p className="card-category">Rol</p>
            </div>
          </div>
        </div>
        <Button variant="primary">Editar</Button>
      </div>
    </div>
  );
};

export default Perfil