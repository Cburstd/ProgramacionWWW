const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const prestamoSchema = new mongoose.Schema( {
    usuarioId: {
        type: Schema.Types.ObjectId,
        ref: 'usuario',
        required: true
    },
    inventarioId: {
        type: Schema.Types.ObjectId,
        ref: 'inventario',
        required: true
      },
    fecha_prestamo: Date,
    fecha_devolucion: Date,
    detalle_prestamo: String,
    cantidad_solicitada: Number,
    estado: Number
});

module.exports = mongoose.model('prestamo', prestamoSchema)