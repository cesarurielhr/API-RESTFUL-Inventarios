//Commerce
import ProdServ from '../models/ProdServ.js';
import boom from '@hapi/boom';
import CatInventories from '../models/inventory.model'; // Ajusta la ruta según sea necesario

//FIC: GET PRODUCTS AND SERVICES LIST
export const getProdServList = async () => {
    let prodServList;
    try {
          prodServList = await ProdServ.find();
          return(prodServList);
    } catch (error) {
      //res.status(500).json({ message: 'Error: ' + ficError });
      throw boom.internal(error);
    }
  };
  //FIC: GET PRODUCT OR SERVICE BY ID
const getProdServItem = async (id, keyType) => {
    const query = { _id: id }; // Cambia según tu modelo
    if (keyType) {
      query.keyType = keyType; // Añade más condiciones según tu lógica
    }
    return await CatInventory.findOne(query).exec(); // O findById(id) si solo necesitas buscar por ID
  };
  
 // Exporta la función
export default {
  getProdServItem,
};
  //Commerce
// POST (ADD) Productos y/o Servicios.
export const postProdServItem = async (paProdServItem) => {
  try {
  const newProdServItem = new ProdServ(paProdServItem);
  return await newProdServItem.save();
  } catch (error) {
  throw error;
  }
  };

// PUT - Actualiza un producto o servicio
// Exporta la función
export const putInventoryItem = async (id, paInventoryItem) => {
  try {
      return await CatInventories.findOneAndUpdate({ _id: id }, paInventoryItem, {
          new: true, // Devuelve el documento actualizado
      });
  } catch (error) {
      throw new Error('Error al actualizar el producto o servicio: ' + error.message); // Manejo de error
  }
};

// Servicio para eliminar un producto o servicio
export const deleteProdServItem = async (id) => {
  try {
    const deletedItem = await CatInventories.findByIdAndDelete(id); // O el modelo que estés usando
    return deletedItem;
  } catch (error) {
    throw new Error('Error al eliminar el producto o servicio: ' + error.message);
  }
};



