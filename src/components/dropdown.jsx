import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import { NavLink } from 'react-router-dom'

function BasicDropdown() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Consultas
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item >
            
        <NavLink
        className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
        to='/devolucion'
      >Devolución
      </NavLink>

        </Dropdown.Item>

        <DropdownItem >
        <NavLink
        className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
        to='/prestamo'
      >Prestamo
      </NavLink>
        </DropdownItem>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicDropdown;