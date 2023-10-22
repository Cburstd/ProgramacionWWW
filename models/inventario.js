const mongoose = require('mongoose');

const inventarioSchema = new mongoose.Schema( {
    nombre_producto: String,
    categoria: Number,
    detalle_inventario: String,
    cantidad_stock: Number,
    /* imagen: image, */
    popularidad: Number

});

module.exports = mongoose.model('inventario', inventarioSchema)