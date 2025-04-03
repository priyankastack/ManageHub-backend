import express from 'express';
import getservice from '../controller/service-controller.js';
const servicerouter=express.Router();

servicerouter.route('/services').get(getservice);
export default servicerouter;




