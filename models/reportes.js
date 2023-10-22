const mongoose = require('mongoose');

const reporteSchema = new mongoose.Schema( {
    usuarioId: {
        type: Schema.Types.ObjectId,
        ref: 'usuario',
        required: true
    },
    fecha_reporte: Date,
    tipo_reporte: Number,
    descripcion: String

});

module.exports = mongoose.model('reporte', reporteSchema)