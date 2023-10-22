const mongoose = require('mongoose');

const usuario_perfilSchema = new mongoose.Schema( {
    perfil: perfil,
    usuario: String
});

module.exports = mongoose.model('usuario_perfil', usuario_perfilSchema)