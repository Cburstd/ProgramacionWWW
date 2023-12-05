const mongoose = require('mongoose');

/* const usuarioSchema = new mongoose.Schema( {
    email: String,
    pass: String
}); */

const usuarioSchema = new mongoose.Schema( {
    nombre: String,
    n_solicitudes_pendientes: Number,
    n_prestamos_actuales: Number,
    n_devoluciones_hechas: Number,
    n_solicitudes_validadas: Number
});

module.exports = mongoose.model('Usuario', usuarioSchema)