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
  $ .ajax({
      type: "POST",
      url: "localhost:8090"
  })

  
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