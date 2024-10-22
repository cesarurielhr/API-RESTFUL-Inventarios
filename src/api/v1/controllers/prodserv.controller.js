import * as ProdServServices from '../services/prodServ.service';
import boom from '@hapi/boom';
import CatInventories from '../models/inventory.model'; // Asegúrate de que la ruta sea correcta
import { putInventoryItem , getProdServItem} from '../services/prodServ.service'; 

//FIC: API GET
//----------------------------------------
//FIC: Todos los Productos/Servicios.
export const getProdServList = async (req, res, next) => {
    try{
      const prodServList = await ProdServServices.getProdServList();
      if (!prodServList) {
        throw boom.notFound('No se encontraron productos/servicios registrados.');
      } else if (prodServList) {
        res.status(200).json(prodServList);
      } 

      } catch(error) {
        next(error);
      }
    };
// FIC: Solo un Producto/Servicio.
export const getProductById = async (req, res) => {
  try {
      const product = await CatInventories.findById(req.params.id); // Usamos findById
      if (!product) {
          return res.status(404).json({ message: 'Producto no encontrado' });
      }
      res.status(200).json(product);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};
  //FIC: API POST.
// POST - Crear nuevo producto o servicio en la colección cat_Inventories
export const postProdServ = async (req, res) => {
  try {
    const { productId, ...rest } = req.body;

    if (!productId) {
      return res.status(400).json({ message: "productId is required" });
    }

    const newProduct = new CatInventories({ productId, ...rest });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
/* PUT - Actualizar un producto por medio de su ID*/
// Controlador para actualizar un producto o servicio
export const updateInventoryItem = async (req, res) => {
  const { id } = req.params; // Obtén el ID del item desde los parámetros
  const paInventoryItem = req.body; // Obtén los datos actualizados del cuerpo de la solicitud

  try {
      const updatedItem = await putInventoryItem(id, paInventoryItem);
      if (!updatedItem) {
          return res.status(404).json({ message: 'Item no encontrado' });
      }
      res.status(200).json(updatedItem); // Respuesta exitosa con el item actualizado
  } catch (error) {
      res.status(500).json({ message: 'Error en el servidor', error: error.message });
  }
};

//FIC: DELETE PRODUCT OR SERVICE
export const deleteProdServ = async (req, res) => {
  const { id } = req.params; // Obtén el ID desde los parámetros

  try {
    const deletedItem = await CatInventories.findByIdAndDelete(id);
    if (!deletedItem) {
      return res.status(404).json({ message: 'Producto o servicio no encontrado' });
    }
    res.status(200).json({ message: 'Producto o servicio eliminado correctamente', deletedItem });
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor', error: error.message });
  }
};

