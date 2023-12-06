import React, { useEffect ,useState} from 'react'
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

function FormProfeConsulta() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(()=>{
        obtenerUsuarios()
            .then(data => setUsuarios(data));
    },[]);

  return (
    <div>
        <h2>Lista Usuarios</h2>
        <select name="cmbPerfiles" id="cmbPerfiles" className="form-select">
            {
                usuarios.map(usuario => (
                    <option value={usuario.id}>{usuario.nombre}</option>
                ))
            }
        </select>
    </div>
  );
}

export default FormProfeConsulta;