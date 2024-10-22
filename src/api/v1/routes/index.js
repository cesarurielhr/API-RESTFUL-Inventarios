
import { Router } from 'express';
import config from '../../../config/config';
// Import Routes
import prodServRoutes from './prodServ.routes';



//import ordersRoutes from './orders.routes';
const routerAPI = (app) => {
  const router = Router();
  const api = config.API_URL;

  app.use(api, router);
  // Routes
  router.use('/prod-serv', prodServRoutes);
  //router.use('/orders', ordersRoutes);
  // Return Router
  app.use('/api/v1/prod-serv', prodServRoutes);
  return router;
};
module.exports = routerAPI;