const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  imageUrl: {
    type: String,
    required: true
  },
  inventarioId: {
    type: Schema.Types.ObjectId,
    ref: 'inventario',
    required: true
  }
});
module.exports = mongoose.model('Image', imageSchema);