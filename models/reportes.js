const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const reporteSchema = new mongoose.Schema( {
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
    },
    fecha_reporte: String,
    tipo_reporte: Number,
    descripcion: String

});

module.exports = mongoose.model('Reporte', reporteSchema)