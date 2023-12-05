const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const prestamoSchema = new mongoose.Schema( {
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
    },
    inventario: {
        type: Schema.Types.ObjectId,
        ref: 'Inventario',
      },
    fecha_prestamo: String,
    fecha_devolucion: String,
    detalle_prestamo: String,
    cantidad_solicitada: Number,
    estado: Number
});

module.exports = mongoose.model('Prestamo', prestamoSchema)