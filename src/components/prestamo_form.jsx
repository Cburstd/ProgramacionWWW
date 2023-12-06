import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios' ;

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

const registrarPrestamo = async (nCantidadSolicitada, DetallePrestamo, Estado, FechaDevolucion, FechaPrestamo, Inventario, Usuario) => {
    const query = `
      mutation miMutation($input : UsuarioInput){
        addPrestamo(input: $input){
            id
            fecha_prestamo
            fecha_devolucion
            detalle_prestamo
            cantidad_solicitada
            estado
        }
      }
    `;
    try{
      const response = await axios.post('http://localhost:8090/graphql',{
        query,
        variables: {
          input: {
            cantidad_solicitada: nCantidadSolicitada,
            detalle_prestamo: DetallePrestamo,
            estado: Estado,
            fecha_devolucion: FechaDevolucion,
            fecha_prestamo: FechaPrestamo,
            inventario: Inventario,
            usuario: Usuario
          }
        }
      });
      return response.data;
    }catch(error){
      console.error("Error al registrar el perfil", error);
      throw error;
    }
};

function FormPrestamo() {
  const [nCantidadSolicitada, setCantidadSolicitada] = useState(0);
  const [DetallePrestamo, setDetallePrestamo] = useState('');
  const [Estado, setEstado] = useState(0);
  const [FechaDevolucion, setFechaDevolucion] = useState('');
  const [FechaPrestamo, setFechaPrestamo] = useState('');
  const [Inventario, setInventario] = useState('');
  const [Usuario, setUsuario] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await registrarPrestamo(nCantidadSolicitada, DetallePrestamo, Estado, FechaDevolucion, FechaPrestamo, Inventario, Usuario);
    console.log('Prestamo registrado', result);
  };

  const [inventarios, setInventarios] = useState([]);
  useEffect(()=>{
      obtenerInventarios()
          .then(data => setInventarios(data));
  },[]); 

  return (
    <>
    <br/>
    <form onSubmit={handleSubmit}>
    <div className="form-group row">
        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Inventario:</label>
        <div className="col-sm-2">
        <select value={Inventario} onChange={(e)=> setInventario(e.target.value)} className="form-control" id="exampleFormControlSelect1">
            {
                inventarios.map(usuario => (
                    <option value={usuario.id}>{usuario.nombre}</option>
                ))
            }
        </select>
        </div>
    </div>
    <br/>
    <div className="form-group row ">
        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Cantidad Solicitada:</label>
        <div className="col-sm-1">
        <input type="number" value={nCantidadSolicitada} onChange={(e)=> setCantidadSolicitada(parseInt(e.target.value))} className="form-control" id="inputEmail3" />
        </div>
    </div>
    <br/>
    <div className="form-group row">
        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Estado:</label>
        <div className="col-sm-2">
        <select value={Estado} onChange={(e)=> setEstado(parseInt(e.target.value))} className="form-control" id="exampleFormControlSelect2">
            <option value="1">Nuevo</option>
            <option value="2">Sin Daños</option>
            <option value="3">Daños Menores</option>
            <option value="4">Daños Medios</option>
            <option value="5">Daños Graves</option>
        </select>
        </div>
    </div>
    <br/>
    <div className="form-group row">
        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Fecha de Devolución:</label>
        <div className="col-sm-2">
        <input placeholder='00-00-0000' type="text" value={FechaDevolucion} onChange={(e)=> setFechaDevolucion(e.target.value)} className="form-control" id="inputEmail1" />
        </div>
    </div>
    <br/>
    <div className="form-group row">
        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Fecha de Prestamo:</label>
        <div className="col-sm-2">
        <input placeholder='00-00-0000' type="text" value={FechaPrestamo} onChange={(e)=> setFechaPrestamo(e.target.value)} className="form-control" id="inputEmail2" />
        </div>
    </div>
    <br/>
    <div className="form-group">
    <label htmlFor="exampleFormControlTextarea1">Detalle del Prestamo:</label>
    <textarea className="form-control" value={DetallePrestamo} onChange={(e)=> setDetallePrestamo(e.target.value)} id="exampleFormControlTextarea3" rows="3"></textarea>
    </div>
    <br/>
    <div className="form-group row">
        <div className="col-sm-8">
        <button type="submit" className="btn btn-primary">Ingresar Prestamo</button>
        </div>
    </div>
    </form>
    </>
  );
}

export default FormPrestamo;