import React, { useEffect ,useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios' ;

/* const registrarPerfil = async (nombre, nSolicitudesPendientes, nPrestamosActuales, nDevolucionesHechas, nSolicitudesValidadas) => {
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
}; */

/* const obtenerPrestamos = async () => {
  const query = `
      query miQuery{
          getPrestamo{
              id
              usuario
              inventario
              fecha_prestamo
              fecha_devolucion
              detalle_prestamo
              cantidad_solicitada
              estado
          }
      }
  `;
  try{
      const response = await axios.post('http://localhost:8090/graphql', {query});
      console.log(response);
      return response.data.data.getPrestamo;
  } catch(error){
      console.error("Error al obtener Prestamos", error);
      throw error;
  }
}; */

const obtenerPerfiles = async () => {
  const query = `
      query miQuery{
          getUsuarios{
              id
              nombre
              n_solicitudes_pendientes
              n_prestamos_actuales
              n_devoluciones_hechas
              n_solicitudes_validadas
          }
      }
  `;
  try{
      const response = await axios.post('http://localhost:8090/graphql', {query});
      console.log(response);
      return response.data.data.getUsuarios;
  } catch(error){
      console.error("Error al obtener usuarios", error);
      throw error;
  }
};

const obtenerInventarios = async () => {
  const query = `
      query miQuery{
          getInventario{
            id
            nombre
            categoria
            detalle_inventario
            cantidad_stock
            popularidad
          }
      }
  `;
  try{
      const response = await axios.post('http://localhost:8090/graphql', {query});
      console.log(response);
      return response.data.data.getInventario;
  } catch(error){
      console.error("Error al obtener el inventario", error);
      throw error;
  }
};


const registrarDevolucion = async (usuario2, inventario2, fecha_prestamo, fecha_devolucion, detalle_devolucion, cantidad_devuelta) => {
  const query = `
    mutation miMutation($input : DevolucionInput){
      addDevolucion(input: $input){
        id
        usuario
        inventario
        fecha_prestamo
        fecha_devolucion
        detalle_devolucion
        cantidad_devuelta
      }
    }
  `;
  try{
    const response = await axios.post('http://localhost:8090/graphql',{
      query,
      variables: {
        input: {
          usuario: usuario2,
          inventario: inventario2,
          fecha_prestamo: fecha_prestamo,
          fecha_devolucion: fecha_devolucion,
          detalle_devolucion: detalle_devolucion,
          cantidad_devuelta: cantidad_devuelta
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
  /* const [prestamos, setPrestamos] = useState([]);

    useEffect(()=>{
      obtenerPrestamos()
            .then(data => setPrestamos(data));
    },[]); */

  // variables para obtener usuarios
  const [perfiles, setPerfiles] = useState([]);
  useEffect(()=>{
      obtenerPerfiles()
          .then(data => setPerfiles(data));
  },[]);

  //variables para obtener inventarios
  const [inventarios, setInventarios] = useState([]);
  useEffect(()=>{
      obtenerInventarios()
          .then(data => setInventarios(data));
  },[]);

  //variables para insertar devolucion
  const [usuario2, setUsuario2] = useState('');
  const [inventario2, setInventario2] = useState('');
  const [fecha_prestamo, setFechaPrestamo] = useState('');
  const [fecha_devolucion, setFechaDevolucion] = useState('05-12-2023');
  const [detalle_devolucion, setDetalleDevolucion] = useState('');
  const [cantidad_devuelta, setCantidadDevuelta] = useState(0);

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    if ([fecha_prestamo].includes('')) {
      console.log("Debe ingresar fecha");
    } else{
      console.log("La fecha fue ingresada");
      //llamar a graphql
      const result = await registrarDevolucion(usuario2, inventario2, fecha_prestamo, detalle_devolucion, cantidad_devuelta);
      console.log('Devolucion Ingresada Correctamente', result);
    }
  };

  return (
    <Form onSubmit={handleSubmit2}>
      {/* <div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>RUT</Form.Label>
        <Form.Control type="id" placeholder="Ingrese su RUT" />
        
      </Form.Group>
      </div> */}
      <div className='col-sm-5'>
      <label>Seleccione un usuario:</label>
      <select name="cmbPerfiles2" id="cmbPerfiles2" className="form-select" value={usuario2}
      onChange={(e)=> setUsuario2(e.target.value)}>
          {
              perfiles.map(usuario => (
                  <option value={usuario.id}>{usuario.nombre}</option>
              ))
          }
      </select>
      </div>
      {/* <select className="form-select" aria-label="Default select example">
        
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select> */}
      <div className='col-sm-5'>
        <Form.Label>Seleccione una Herramienta:</Form.Label>
        <select name="cmbPerfiles3" id="cmbPerfiles3" className="form-select" value={inventario2}
        onChange={(e)=> setInventario2(e.target.value)}>
            {
                inventarios.map(usuario => (
                    <option value={usuario.id}>{usuario.nombre}</option>
                ))
            }
        </select>
      </div>
      <div>
        <Form.Group className="mb-3 col-sm-3" controlId="formBasicPassword4">
          
            <Form.Label>Ingrese una fecha de Prestamo:</Form.Label>
            <Form.Control type="text" placeholder="00-00-0000" value={fecha_prestamo}
            onChange={(e)=> setFechaPrestamo(e.target.value)}/>
          
          
        </Form.Group>
      </div>
      <div>
        <Form.Group className="mb-3 col-sm-3" controlId="formBasicPassword">
            <Form.Label>Fecha de Devolucion</Form.Label>
            <select 
            className="form-select" 
            aria-label="Default select example" 
            value={fecha_devolucion}
            onChange={(e)=> setFechaDevolucion(e.target.value)}>
              <option value="05-12-2023">05-12-2023 (hoy)</option>
            </select>
        </Form.Group>
      </div>
      <div>
        <Form.Group className="mb-3 col-sm-5" controlId="formBasicPassword2">
          <Form.Label>Detalle: </Form.Label>
          <Form.Control type="text" placeholder="" value={detalle_devolucion}
          onChange={(e)=> setDetalleDevolucion(e.target.value)}/>
        </Form.Group>
      </div>
      <div>
        <Form.Group className="mb-3 col-sm-2" controlId="formBasicPassword3">
          <Form.Label>Cantidad a devolver:  </Form.Label>
          <Form.Control type="number" placeholder="" value={cantidad_devuelta}
            onChange={(e)=> setCantidadDevuelta(e.target.value)}/>
        </Form.Group>
      </div>
      <div>
      
      <Button variant="primary" type="submit">
        Aceptar
      </Button>
      </div>
    </Form>
  );
}

export default BasicExample;