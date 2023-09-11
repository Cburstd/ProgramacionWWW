import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Logocomp from '../assets/HHMlogo.png'
import LogoUser from  '../assets/saul.png';
import { Button} from 'react-bootstrap';
import "../components/horario/style.css";
import NavBar from '../components/nav_bar';

export const Perfil = () => {

  const user = {
    nombre: 'Nombre del Usuario',
    correo: 'usuario@example.com',
    contrasena: '********',
    telefono: '1234567890',
    direccion: 'Calle 123, Colonia, Ciudad, Estado',
    carrera: 'Ingeniería en Computación',
    semestre: '8',
    rol: 'Cliente',
  };

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
          <div className="col-1"></div>
          <div className="col-4">
            <img src={LogoUser} className="img-fluid" />
          </div>
          <div className="col-1"></div>
          <div className="col-6">
            <div className="card-body">
              <p><strong>Nombre:</strong> {user.nombre}</p>
              <p><strong>Correo Electrónico:</strong> {user.correo}</p>
              <p><strong>Contraseña:</strong> {user.contrasena}</p>
              <p><strong>Teléfono:</strong> {user.telefono}</p>
              <p><strong>Dirección:</strong> {user.direccion}</p>
              <p><strong>Carrera:</strong> {user.carrera}</p>
              <p><strong>Semestre:</strong> {user.semestre}</p>
              <p><strong>Rol:</strong> {user.rol}</p>
            </div>
            <Button variant="primary">Editar</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil