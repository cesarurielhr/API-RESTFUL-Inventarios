
import mongoose from 'mongoose';

const inventorySchema = new mongoose.Schema({
  productId: { type: Number, required: true },
  price: { type: Number, required: true },
  detail_row: {
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    isActive: { type: Boolean, default: true },
  },
});

const CatInventories = mongoose.model('CatInventories', inventorySchema);
export default CatInventories; // Asegúrate de que estás exportando el modelo correctamente
