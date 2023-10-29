const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const prestamoSchema = new mongoose.Schema( {
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
    fecha_prestamo: Date,
    fecha_devolucion: Date,
    detalle_prestamo: String,
    cantidad_solicitada: Number,
    estado: Number
});

module.exports = mongoose.model('Prestamo', prestamoSchema)