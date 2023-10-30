const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const solicitudSchema = new mongoose.Schema( {
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    inventario: {
        type: Schema.Types.ObjectId,
        ref: 'Inventario',
        required: true
      },
    fecha_solicitud: Date,
    detalle_solicitud: String,
    cantidad_solicitada: Number,
    estado: Number
});

module.exports = mongoose.model('Solicitud', solicitudSchema)