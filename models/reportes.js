const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const reporteSchema = new mongoose.Schema( {
    usuarioId: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    fecha_reporte: Date,
    tipo_reporte: Number,
    descripcion: String

});

module.exports = mongoose.model('Reporte', reporteSchema)