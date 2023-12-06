import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios' ;

const obtenerUsuarios = async () => {
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

const registrarReporte = async (usuario, fecha_reporte, tipo_reporte, descripcion) => {
    const query = `
      mutation miMutation($input : ReporteInput){
        addReporte(input: $input){
          id
          usuario {
            id
          }
          fecha_reporte
          tipo_reporte
          descripcion
        }
      }
    `;
    try{
      const response = await axios.post('http://localhost:8090/graphql',{
        query,
        variables: {
          input: {
            usuario: usuario,
            fecha_reporte: fecha_reporte,
            tipo_reporte: tipo_reporte,
            descripcion: descripcion,
          }
        }
      });
      return response.data;
    }catch(error){
      console.error("Error al registrar el Reporte", error);
      throw error;
    }
};

function FormReporte() {
  const [usuario, setUsuario] = useState('');
  const [fecha_reporte, setFechaReporte] = useState('');
  const [tipo_reporte, setTipoReporte] = useState(0);
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ([usuario].includes('')) {
      console.log("Debe ingresar el usuario");
    } else{
      console.log("El usuario fue ingresado");
      //llamar a graphql
      const result = await registrarReporte(usuario, fecha_reporte, tipo_reporte, descripcion);
      console.log('Reporte registrado', result);
    }
  };

  // aqui para abajo obtener usuarios
  const [usuarios, setUsuarios] = useState([]);

    useEffect(()=>{
        obtenerUsuarios()
            .then(data => setUsuarios(data));
    },[]);

  return (
    <>
      <form
        onSubmit={handleSubmit}
      >
        <br /><br /><br />
        <div className="form-group mb-3">
        <label>Seleccione Usuario</label>
        <select name="cmbPerfiles" id="cmbPerfiles" className="form-select" value={usuario}
            onChange={(e)=> setUsuario(e.target.value)}>
            {
                usuarios.map(usuario => (
                    <option value={usuario.id}>{usuario.nombre}</option>
                ))
            }
        </select>
        </div>
        <div className="form-group mb-3">
            <label>Fecha Reporte</label>
            <input
              className="form-control"
              type="text" 
              placeholder='00-00-0000'
              value={fecha_reporte}
              onChange={(e)=> setFechaReporte(e.target.value)}
            >
            </input>
        </div>
        <div className="form-group mb-2">
            <label>Tipo Reporte</label>
            <select className="form-select" aria-label="Default select example" 
            value={tipo_reporte}
            onChange={(e)=> setTipoReporte(parseInt(e.target.value))}>
                <option value="1">Tecnico</option>
                <option value="2">Personal</option>
                <option value="3">Otros</option>
            </select>
        </div>
        <div className="form-group mb-6">
            <label>Descripcion:</label>
            <input
              className="form-control"
              type="text" 
              placeholder=''
              value={descripcion}
              onChange={(e)=> setDescripcion(e.target.value)}
              
            >
            </input>
        </div> <br />
        <div className="form-group mb-2">
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

export default FormReporte;