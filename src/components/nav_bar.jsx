import React from 'react'
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function Navbar({ userType = 'coordinador' }) {
  return (
    <div className="container">
      <div className="d-flex flex-wrap">
        <NavLink to="/" className="d-flex mb-2 text-dark">
          <svg className="bi me-2" width="40" height="32" role="img" aria-label="Boostrap"><use xlinkHref="#boostrap"></use></svg>
        </NavLink>

        <ul className="nav col-lg-auto me-lg-auto mb-2 mb-md-0">
          <li><NavLink to="/catalogo" className="nav-link px-3 link-secondary">C&aacute;talogo</NavLink></li>
          {userType === 'super-admin' && (
          <li className="nav-item dropdown">
            <a href="#" className="nav-link px-3 link-dark dropdown-toggle" id="adminDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Administraci&oacute;n
            </a>
            <ul className="dropdown-menu" aria-labelledby="adminDropdown">
              <li><NavLink to="/users" className="dropdown-item">Usuarios</NavLink></li>
              <li><NavLink to="/inventario" className="dropdown-item">Inventario</NavLink></li>
            </ul>
          </li>)}
          {userType === 'super-admin' && (
            <li><NavLink to="/reportes" className="nav-link px-3 link-dark">Reportes</NavLink></li>
          )}
          {userType === 'coordinador' && (
            <li className="nav-item dropdown">
            <a href="#" className="nav-link px-3 link-dark dropdown-toggle" id="coordinadorDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Consultas
            </a>
            <ul className="dropdown-menu" aria-labelledby="coordinadorDropdown">
              <li><NavLink to="/prestamos" className="dropdown-item">Pr&eacute;stamo</NavLink></li>
              <li><NavLink to="/devolucion" className="dropdown-item">Devoluci&oacute;n</NavLink></li>
            </ul>
          </li>)}
          {userType === 'coordinador'&& (
            <li className="nav-item dropdown">
              <a href="#" className="nav-link px-3 link-dark dropdown-toggle" id="coordinadorDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Administraci&oacute;n
              </a>
              <ul className="dropdown-menu" aria-labelledby="coordinadorDropdown">
                <li><NavLink to="/users" className="dropdown-item">Usuarios</NavLink></li>
                <li><NavLink to="/inventario" className="dropdown-item">Inventario</NavLink></li>
                <li><NavLink to="/prestamos" className="dropdown-item">Pr&eacute;stamos</NavLink></li>
              </ul>
            </li>)}
          {userType === 'coordinador' && (
            <li><NavLink to="/reportes" className="nav-link px-3 link-dark">Reportes</NavLink></li>
          )}
          {userType === 'panolero' && (
            <li className="nav-item dropdown">
            <a href="#" className="nav-link px-3 link-dark dropdown-toggle" id="panoleroDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Consultas
            </a>
            <ul className="dropdown-menu" aria-labelledby="panoleroDropdown">
              <li><NavLink to="/prestamos" className="dropdown-item">Pr&eacute;stamo</NavLink></li>
              <li><NavLink to="/devolucion" className="dropdown-item">Devoluci&oacute;n</NavLink></li>
            </ul>
          </li>)}
          {userType === 'panolero' && (
            <li className="nav-item dropdown">
              <a href="#" className="nav-link px-3 link-dark dropdown-toggle" id="panoleroDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Administraci&oacute;n
              </a>
              <ul className="dropdown-menu" aria-labelledby="panoleroDropdown">
                <li><NavLink to="/inventario" className="dropdown-item">Inventario</NavLink></li>
                <li><NavLink to="/prestamos" className="dropdown-item">Pr&eacute;stamos</NavLink></li>
              </ul>
            </li>)}
          {userType === 'panolero' && (
            <li><NavLink to="/reportes" className="nav-link px-3 link-dark">Reportes</NavLink></li>
          )}
          {userType === 'client' && (
            <li className="nav-item dropdown">
            <a href="#" className="nav-link px-3 link-dark dropdown-toggle" id="clientDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Consultas
            </a>
            <ul className="dropdown-menu" aria-labelledby="clientDropdown">
              <li><NavLink to="/prestamos" className="dropdown-item">Pr&eacute;stamo</NavLink></li>
              <li><NavLink to="/devolucion" className="dropdown-item">Devoluci&oacute;n</NavLink></li>
            </ul>
          </li>)} 
          {userType === 'client'&& (
            <li><NavLink to="/reportes" className="nav-link px-3 link-dark">Reportes</NavLink></li>
          )}
        </ul>

        <form className="col-lg-auto mb-3 me-lg-3">
          <input type="search" className="form-control" placeholder="Buscar..." aria-label="Buscar" />
        </form>

        <div className="dropdown text-end">
          <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />
          </a>
          <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser">
            <li><a className="dropdown-item" href="#">Mi Perf&iacute;l</a></li>
            <li><a className="dropdown-item" href="#">Configuraci&oacute;n</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Salir</a></li>
          </ul>
        </div>
      </div>
    </div>
  );s
}

export default Navbar;
