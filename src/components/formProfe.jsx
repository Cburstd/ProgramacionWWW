import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios' ;

const registrarPerfil = async (nombre, nSolicitudesPendientes, nPrestamosActuales, nDevolucionesHechas, nSolicitudesValidadas) => {
    const query = `
      mutation miMutation($input : UsuarioInput){
        addUsuario(input: $input){
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
      const response = await axios.post('http://localhost:8090/graphql',{
        query,
        variables: {
          input: {
            nombre: nombre,
            n_solicitudes_pendientes: nSolicitudesPendientes,
            n_prestamos_actuales: nPrestamosActuales,
            n_devoluciones_hechas: nDevolucionesHechas,
            n_solicitudes_validadas: nSolicitudesValidadas
          }
        }
      });
      return response.data;
    }catch(error){
      console.error("Error al registrar el perfil", error);
      throw error;
    }
};

function FormProfe() {
  const [nombre, setNombre] = useState('');
  const [nSolicitudesPendientes, setNSolicitudesPendientes] = useState(0);
  const [nPrestamosActuales, setNPrestamosActuales] = useState(0);
  const [nDevolucionesHechas, setNDevolucionesHechas] = useState(0);
  const [nSolicitudesValidadas, setNSolicitudesValidadas] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ([nombre].includes('')) {
      console.log("Debe ingresar el nombre");
    } else{
      console.log("El nombre fue ingresado");
      //llamar a graphql
      const result = await registrarPerfil(nombre, nSolicitudesPendientes, nPrestamosActuales, nDevolucionesHechas, nSolicitudesValidadas);
      console.log('Perfil registrado', result);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
      >
        <div className="form-group mb-3">
            <label>Nombre</label>
            <input
              className="form-control"
              type="text" 
              placeholder='Ingrese nombre perfil'
              value={nombre}
              onChange={(e)=> setNombre(e.target.value)}
            >
            </input>
        </div>
        <div className="form-group mb-3">
            <label>N° SolicitudesPendientes</label>
            <input
              className="form-control"
              type="number" 
              placeholder='n_solicitudes_pendientes'
              value={nSolicitudesPendientes}
              onChange={(e)=> setNSolicitudesPendientes(parseInt(e.target.value))}
            >
            </input>
        </div>
        <div className="form-group mb-3">
            <label>N° Prestamos Actuales</label>
            <input
              className="form-control"
              type="number" 
              placeholder='nPrestamosActuales'
              value={nPrestamosActuales}
              onChange={(e)=> setNPrestamosActuales(parseInt(e.target.value))}
            >
            </input>
        </div>
        <div className="form-group mb-3">
            <label>N° Devoluciones Hechas</label>
            <input
              className="form-control"
              type="number" 
              placeholder='n_devoluciones_hechas'
              value={nDevolucionesHechas}
              onChange={(e)=> setNDevolucionesHechas(parseInt(e.target.value))}
              
            >
            </input>
        </div>
        <div className="form-group mb-3">
            <label>N° Solicitudes Validadas</label>
            <input
              className="form-control"
              type="number" 
              placeholder='n_solicitudes_validadas'
              value={nSolicitudesValidadas}
              onChange={(e)=> setNSolicitudesValidadas(parseInt(e.target.value))}
            >
            </input>
        </div>
        <div className="form-group">
            <input
              className="form-control"
              type="submit"
              value="Agregar"
            >
            </input>  
        </div>
      </form>
    </>
  );
}

export default FormProfe;