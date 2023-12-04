import React from 'react'
import { Button } from '@mui/material'

import NavBar from '../components/nav_bar'
import pronto from '../assets/soon.png'
import BasicExampleProfe from '../components/formProfe'

export const ReportesPage = () => {
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

  function obtenerPerfiles() {
  let query = `
    query getUsuariosquery{
        getUsuarios{
            id
            nombre_usuario
            n_solicitudes_pendientes
            n_prestamos_actuales
            n_devoluciones_hechas
            n_solicitudes_validadas
        }
    }
  `;
  $.ajax({
      type: "POST",
      url: "http://localhost:8090/graphql",
      contentType: "application/json",
      timeout: 15000,
      data: JSON.stringify({
        query: query,
        variables: {}
      }),
      success: function(response) {
        console.log(response);
        let select = document.getElementById('usuario');
        response.data.getPerfiles.forEach((element)=>{
          const opt = document.createElement('option');
          opt.value = element.id;
          opt.text = element.nombre_usuario;
          select.appendChild(opt);
          console.log(element);
        });
      }
  });
  }
  
  
  return (
    <div className='page'>
      <h1 className='page__title'>Hamlin Hamlin & McGill</h1>
      <NavBar />
      <BasicExampleProfe/>
      <script>
        obtenerPerfiles();
      </script>
    </div>

  )
}

export default ReportesPage