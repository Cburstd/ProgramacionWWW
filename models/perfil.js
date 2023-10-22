const mongoose = require('mongoose');

const perfilSchema = new mongoose.Schema( {
    nombre_perfil: String
});

module.exports = mongoose.model('perfil', perfilSchema)