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
 type Usuario{
    id: ID!
    nombre_usuario: String!
    n_solicitudes_pendientes: Int!
    n_prestamos_actuales: Int!
    n_devoluciones_hechas: Int!
    n_solicitudes_validadas: Int!
 }

 type Inventario{
    id: ID!
    nombre_producto: String!
    categoria: Int!
    detalle_inventario: String
    cantidad_stock: Int!
    popularidad: Int!
 }

 type Prestamo{
    id: ID!
    usuarioId: ID!
    inventarioId: ID!
    fecha_prestamo: Date!
    fecha_devolucion: Date
    detalle_prestamo: String
    cantidad_solicitada: Int!
    estado: Int!
 }

 type Alert{
    message: String
 }

 input UsuarioInput {
    nombre_usuario: String!
    n_solicitudes_pendientes: Int!
    n_prestamos_actuales: Int!
    n_devoluciones_hechas: Int!
    n_solicitudes_validadas: Int!
 }

 input InventarioInput {
    nombre_producto: String!
    categoria: Int!
    detalle_inventario: String
    cantidad_stock: Int!
    popularidad: Int!
 }

 type Query {
    getUsuarios: [Usuario]
    getUsuario(id: ID!) : Usuario

    getInventario: [Inventario]
    getProductoInventario(id: ID!) : Inventario
 }

 type Mutation {
    addUsuario(input: UsuarioInput): Usuario
    updateUsuario(id: ID!, input: UsuarioInput): Usuario
    deleteUsuario(id: ID!) : Alert

    addTipoProductoInventario(input: InventarioInput): Inventario
    updateProductoInventario(id: ID!, input: InventarioInput): Inventario
    deleteInventario(id: ID!) : Alert
 }
`;

const resolvers = {
    Query: {
        async getUsuarios(obj){
            const usuarios = await Usuario.find()
            return usuarios;
        },
        async getUsuario(obj, { id }){
            const usuario = await Usuario.findById(id);
            return usuario;
        },

        async getInventario(obj){
            const inventario = await Inventario.find()
            return inventario;
        },
        async getProductoInventario(obj, { id }){
            const inventario = await Inventario.findById(id);
            return inventario;
        }
    },
    Mutation: {
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
        }
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