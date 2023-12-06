import React, { useEffect ,useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios' ;

const obtenerReportes = async () => {
    const query = `
        query getReportesquery(){
            getReportes{
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
        const response = await axios.post('http://localhost:8090/graphql', {query});
        console.log(response);
        return response.data.data.getReportes;
    } catch(error){
        console.error("Error al obtener Reportes", error);
        throw error;
    }
};

function FormReporteGet() {
    const [reportes, setReportes] = useState([]);

    useEffect(()=>{
        obtenerReportes()
            .then(data => setReportes(data));
    },[]);

  return (
    <div>
        <h2>Lista Reportes</h2>
        <select name="cmbPerfiles" id="cmbPerfiles" className="form-select">
            {
                reportes.map(reporte => (
                    <option value={reporte.id}>{reporte.descripcion}</option>
                ))
            }
        </select>
    </div>
  );
}

export default FormReporteGet;