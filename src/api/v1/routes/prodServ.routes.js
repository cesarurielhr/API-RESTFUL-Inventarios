
/* ------------------------------------------------------------------------------------ */
import { Router } from 'express';
import * as prodServController from '../controllers/prodserv.controller.js';

const router = Router();

//GET- MUESTRA TODOS LOS SERVICIOS Y ARCHIVOS
router.get('/', prodServController.getProdServList);

// GET - Muestra un solo producto o servicio por _id
router.get('/:id', prodServController.getProductById);

//POST - INSERTA UN PRODUCTO O SERVICIO
router.post('/', prodServController.postProdServ);

// Definir la ruta PUT para actualizar un producto o servicio
router.put('/:id', prodServController.updateInventoryItem); // Cambié aquí

// DELETE - Eliminar un producto o servicio
router.delete('/:id', prodServController.deleteProdServ);


export default router;
