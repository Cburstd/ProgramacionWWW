import React, { useEffect ,useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios' ;

const registrarPerfil = async (nombre, nSolicitudesPendientes, nPrestamosActuales, nDevolucionesHechas, nSolicitudesValidadas) => {
  const query = `
    mutation miMutation($input : UsuarioInput){
      addDevolucion(input: $input){
        id
        usuario: Usuario
        inventario: Inventario
        fecha_prestamo: String!
        fecha_devolucion: String!
        detalle_devolucion: String
        cantidad_devuelta: Int!
      }
    }
  `;
  try{
    const response = await axios.post('http://localhost:8090/graphql',{
      query,
      variables: {
        input: {
          usuario: usuario,
          inventario: inventario,
          fecha_prestamo: nPrestamosActuales,
          fecha_devolucion: nDevolucionesHechas,
          cantidad_devuelta: nSolicitudesValidadas
        }
      }
    });
    return response.data;
  }catch(error){
    console.error("Error al registrar el perfil", error);
    throw error;
  }
};

function BasicExample() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>RUT</Form.Label>
        <Form.Control type="id" placeholder="Ingrese su RUT" />
        
      </Form.Group>

      <select class="form-select" aria-label="Default select example">
        
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Herramienta</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Equipo</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Comentario</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>

      
      <Button variant="primary" type="submit">
        Aceptar
      </Button>
    </Form>
  );
}

export default BasicExample;