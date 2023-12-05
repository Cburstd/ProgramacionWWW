const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const devolucionSchema = new mongoose.Schema( {
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
    },
    inventario: {
        type: Schema.Types.ObjectId,
        ref: 'Inventario',
      },
    fecha_prestamo: Date,
    fecha_devolucion: Date,
    detalle_devolucion: String,
    cantidad_devuelta: Number,
});

module.exports = mongoose.model('Devolucion',devolucionSchema)