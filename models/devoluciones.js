const mongoose = require('mongoose');

const devolucionesSchema = new mongoose.Schema( {
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
    detalle_devolucion: String,
    cantidad_devuelta: Number


});

module.exports = mongoose.model('devoluciones', devolucionesSchema)