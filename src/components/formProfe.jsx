import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>


function obtenerPerfiles() {
  let query = `
    query miQuery{
        getPerfiles{
            id
            nombre
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
        let select = documen.getElementById('perfil');
        responde.data.getPerfiles.forEach((element)=>{
          const opt = document.createElement('opntion');
          opt.value = elemnt.id;
          opt.text = element.nombre;
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