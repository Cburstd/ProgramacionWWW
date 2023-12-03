import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
      url: "https://localhost:8090/graphql",
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

  

function BasicExampleProfe() {
  return (
    <form action="/action_page.php">
    <div class="mb-3 mt-3">
      <label for="perfil">Perfil:</label>
      <select id="perfil" name="perfil" class="form-select">

      </select>
    </div>
  </form>
  );
}

export default BasicExampleProfe;