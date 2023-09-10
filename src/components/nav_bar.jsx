import React from 'react'
import { NavLink } from 'react-router-dom'
import BasicDropdown from './dropdown'

export const NavBar = () => {
  return (
    <nav className='nav-bar'>
      <NavLink
        className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
        to='/'
      >
        Página de inicio
      </NavLink>
      <NavLink
        className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
        to='/internal'
      >
        Catálogo
        
      </NavLink>
      
      <BasicDropdown/>

      
      <NavLink
        className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
        to='/contacto'
      >
        Contacto
      </NavLink>


      <NavLink
        className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
        to='/soontm'
      >
        Perfil
      </NavLink>
      
      
    </nav>
  )
}

export default NavBar