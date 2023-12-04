import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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