import React, { useEffect ,useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios' ;

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

function FormProfeConsulta() {
    const [perfiles, setPerfiles] = useState([]);

    useEffect(()=>{
        obtenerPerfiles()
            .then(data => setPerfiles(data));
    },[]);

  return (
    <div>
        <h2>Lista Perfiles</h2>
        <select name="cmbPerfiles" id="cmbPerfiles" className="form-select">
            {
                perfiles.map(perfil => (
                    <option value={perfil.id}>{perfil.nombre}</option>
                ))
            }
        </select>
    </div>
  );
}

export default FormProfeConsulta;