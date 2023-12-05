const express = require('express'); //servidor web
const mongoose = require('mongoose'); //comandos nosql bd mongodb
const bodyParser = require('body-parser'); 
const cors = require('cors');

const { ApolloServer, gql } = require('apollo-server-express');
//const {graphqlExpress, graphiqlExpress} = require('graphql-server-express');
//const {makeExecutableSchema} = require('graphql-tools');

const { merge } = require('lodash');

const Usuario = require('./models/usuario');
const Inventario = require('./models/inventario');
const Prestamo = require('./models/prestamos');
const Solicitud = require('./models/solicitudes');
const Devolucion = require('./models/devoluciones');
const Reporte = require('./models/reportes');

mongoose.connect('mongodb+srv://User:UserPassword@cluster0.5pyuiq8.mongodb.net/bdwebmovil', {useNewUrlParser: true, useUnifiedTopology: true});

/* type Usuario{
    id: ID!
    email: String!
    pass: String!
 }

 type Alert{
    message: String
 }

 input UsuarioInput {
    email: String!
    pass: String!
 }

 type Query {
    getUsuarios: [Usuario]
    getUsuario(id: ID!) : Usuario
 }

 type Mutation {
    addUsuario(input: UsuarioInput): Usuario
    updateUsuario(id: ID!, input: UsuarioInput): Usuario
    deleteUsuario(id: ID!) : Alert
 } */

 
const typeDefs = gql`
type Reporte{
    id: ID!
    usuario: Usuario
    fecha_reporte: String!
    tipo_reporte: Int!
    descripcion: String
 } 

type Usuario{
    id: ID!
    nombre: String!
    n_solicitudes_pendientes: Int!
    n_prestamos_actuales: Int!
    n_devoluciones_hechas: Int!
    n_solicitudes_validadas: Int!
 }

 type Inventario{
    id: ID!
    nombre: String
    categoria: Int!
    detalle_inventario: String
    cantidad_stock: Int!
    popularidad: Int!
 }

 type Prestamo{
    id: ID!
    usuario: Usuario
    inventario: Inventario
    fecha_prestamo: String!
    fecha_devolucion: String
    detalle_prestamo: String
    cantidad_solicitada: Int!
    estado: Int!
 }

 type Solicitud{
    id: ID!
    usuario: Usuario
    inventario: Inventario
    fecha_solicitud: String!
    detalle_solicitud: String
    cantidad_solicitada: Int!
    estado: Int!
 }

 type Devolucion{
    id: ID!
    usuario: Usuario
    inventario: Inventario
    fecha_prestamo: String!
    fecha_devolucion: String!
    detalle_devolucion: String
    cantidad_devuelta: Int!
 }

 type Alert{
    message: String
 }

 input ReporteInput {
    usuario: String!
    fecha_reporte: String!
    tipo_reporte: Int!
    descripcion: String
 }

 input UsuarioInput {
    nombre: String!
    n_solicitudes_pendientes: Int!
    n_prestamos_actuales: Int!
    n_devoluciones_hechas: Int!
    n_solicitudes_validadas: Int!
 }

 input InventarioInput {
    nombre: String!
    categoria: Int!
    detalle_inventario: String
    cantidad_stock: Int!
    popularidad: Int!
 }

 input PrestamoInput {
    usuario: String!
    inventario: String!
    fecha_prestamo: String!
    fecha_devolucion: String
    detalle_prestamo: String
    cantidad_solicitada: Int!
    estado: Int!
 }

 input SolicitudInput {
    usuario: String!
    inventario: String!
    fecha_solicitud: String!
    detalle_solicitud: String
    cantidad_solicitada: Int!
    estado: Int!
 }

 input DevolucionInput {
    usuario: String!
    inventario: String!
    fecha_prestamo: String!
    fecha_devolucion: String!
    detalle_devolucion: String
    cantidad_devuelta: Int!
 }

 type Query {
    getReportes: [Reporte]
    getReporte(id: ID!) : Reporte

    getUsuarios: [Usuario]
    getUsuario(id: ID!) : Usuario

    getInventario: [Inventario]
    getProductoInventario(id: ID!) : Inventario

    getPrestamo: [Prestamo]

    getSolicitud: [Solicitud]

    getDevolucion: [Devolucion]
 }

 type Mutation {
    addReporte(input: ReporteInput): Reporte
    updateReporte(id: ID!, input: ReporteInput): Reporte
    deleteReporte(id: ID!) : Alert

    addUsuario(input: UsuarioInput): Usuario
    updateUsuario(id: ID!, input: UsuarioInput): Usuario
    deleteUsuario(id: ID!) : Alert

    addTipoProductoInventario(input: InventarioInput): Inventario
    updateProductoInventario(id: ID!, input: InventarioInput): Inventario
    deleteInventario(id: ID!) : Alert

    addPrestamo(input: PrestamoInput): Prestamo
    updatePrestamo(id: ID!, input: PrestamoInput): Prestamo
    deletePrestamo(id: ID!): Alert

    addSolicitud(input: SolicitudInput): Solicitud
    updateSolicitud(id: ID!, input: SolicitudInput): Solicitud
    deleteSolicitud(id: ID!): Alert

    addDevolucion(input: DevolucionInput): Devolucion
    updateDevolucion(id: ID!, input: DevolucionInput): Devolucion
    deleteDevolucion(id: ID!): Alert
 }
`;

const resolvers = {
    Query: {
        async getReportes(obj){
            const reportes = await Reporte.find().populate("usuario");
            return reportes;
        },
        async getReporte(obj, { id }){
            const reporte = await Reporte.findById(id).populate("usuario");
            return reporte;
        },


        async getUsuarios(obj){
            const usuarios = await Usuario.find();
            return usuarios;
        },
        async getUsuario(obj, { id }){
            const usuario = await Usuario.findById(id);
            return usuario;
        },


        async getInventario(obj){
            const inventario = await Inventario.find();
            return inventario;
        },
        async getProductoInventario(obj, { id }){
            const inventario = await Inventario.findById(id);
            return inventario;
        },


        async getPrestamo(obj){
            const prestamos = await Prestamo.find().populate("usuario");
            return prestamos;
        },


        async getSolicitud(obj){
            const solicitudes = await Solicitud.find();
            return solicitudes;
        },


        async getDevolucion(obj){
            const devoluciones = await Devolucion.find();
            return devoluciones;
        },
    },
    Mutation: {
        async addReporte(obj, { input }){
            const reporte = new Reporte(input);
            await reporte.save();
            return reporte;
        },
        async updateReporte(obj, { id, input}){
            const reporte = await Reporte.findByIdAndUpdate(id, input);
            return reporte;
        },
        async deleteReporte(obj, { id }){
            await Reporte.deleteOne({_id: id});
            return{
                message: "Reporte eliminado"
            }
        },


        async addUsuario(obj, { input }){
            const usuario = new Usuario(input);
            await usuario.save();
            return usuario;
        },
        async updateUsuario(obj, { id, input}){
            const usuario = await Usuario.findByIdAndUpdate(id, input);
            return usuario;
        },
        async deleteUsuario(obj, { id }){
            await Usuario.deleteOne({_id: id});
            return{
                message: "Usuario eliminado"
            }
        },

        async addTipoProductoInventario(obj, { input }){
            const inventario = new Inventario(input);
            await inventario.save();
            return inventario;
        },
        async updateProductoInventario(obj, { id, input}){
            const inventario = await Inventario.findByIdAndUpdate(id, input);
            return inventario;
        },
        async deleteInventario(obj, { id }){
            await Inventario.deleteOne({_id: id});
            return{
                message: "Inventario eliminado"
            }
        },

        async addPrestamo(obj, { input }){
            let inventarioBusq = Inventario.findById(input.inventario);
            if(inventarioBusq==null){
                return null;
            }
            let usuarioBusq = Usuario.findById(input.usuario);
            if(usuarioBusq==null){
                return null;
            }
            const prestamo = new Prestamo(
                {usuario: usuarioBusq._id,
                inventario: inventarioBusq._id,
                fecha_prestamo: input.fecha_prestamo,
                fecha_devolucion: input.fecha_devolucion, detalle_prestamo: input.detalle_prestamo, cantidad_solicitada: input.cantidad_solicitada, estado: input.estado});
            await prestamo.save();
            return prestamo;
        },
        async updatePrestamo(obj, { input }){
            const prestamo = await Prestamo.findByIdAndUpdate(id, input);
            return prestamo;
        },
        async deletePrestamo(obj, {id, input }){
            await Prestamo.deleteOne({_id: id});
            return{
                message: "Prestamo eliminado"
            }
        },


        async addSolicitud(obj, { input }){
            let inventarioBusq = Inventario.findById(input.inventario);
            if(inventarioBusq==null){
                return null;
            }
            let usuarioBusq = Usuario.findById(input.usuario);
            if(usuarioBusq==null){
                return null;
            }
            const solicitud = new Solicitud(
                {usuario: usuarioBusq._id,
                inventario: inventarioBusq._id,
                fecha_solicitud: input.fecha_prestamo,
                detalle_solicitud: input.detalle_solicitud, cantidad_solicitada: input.cantidad_solicitada, estado: input.estado});
            await solicitud.save();
            return solicitud;
        },
        async updateSolicitud(obj, { input }){
            const solicitud = await Solicitud.findByIdAndUpdate(id, input);
            return solicitud;
        },
        async deleteSolicitud(obj, {id, input }){
            await Solicitud.deleteOne({_id: id});
            return{
                message: "Solicitud eliminada"
            }
        },


        async addDevolucion(obj, { input }){
            let inventarioBusq = Inventario.findById(input.inventario);
            if(inventarioBusq==null){
                return null;
            }
            let usuarioBusq = Usuario.findById(input.usuario);
            if(usuarioBusq==null){
                return null;
            }
            const devolucion = new Devolucion(
                {usuario: usuarioBusq._id,
                inventario: inventarioBusq._id,
                fecha_prestamo: input.fecha_prestamo,
                fecha_devolucion: input.fecha_devolucion,
                detalle_devolucion: input.detalle_solicitud, cantidad_devuelta: input.cantidad_devuelta});
            await devolucion.save();
            return devolucion;
        },
        async updateDevolucion(obj, { input }){
            const devolucion = await Devolucion.findByIdAndUpdate(id, input);
            return devolucion;
        },
        async deleteDevolucion(obj, {id, input }){
            await Devolucion.deleteOne({_id: id});
            return{
                message: "Devolucion eliminada"
            }
        },
    }
}

let apolloServer = null;

const corsOptions = {
    origin: "http://localhost:8090",
    credentials: false
}

async function startServer(){
    const apolloServer = new ApolloServer({typeDefs, resolvers, corsOptions});
    await apolloServer.start();

    apolloServer.applyMiddleware({ app, cors: false});
}

startServer();

const app = express();
app.use(cors());
app.listen(8090, function(){
    console.log("Servidor Iniciado");
})