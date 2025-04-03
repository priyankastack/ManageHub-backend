import express from 'express';
import {userbyId,getAllusers,updatebyId,deletebyId,deleteContact} from '../controller/admin-controller.js';
import { getContactdata } from '../controller/admin-controller.js';
import adminValidate from '../middleware/admin-middleware.js';
import loginvalidate from '../middleware/login-middleware.js';
const adminrouter=express.Router();


adminrouter.route('/userdata').get(loginvalidate,adminValidate,getAllusers);
adminrouter.route('/contactdata').get(loginvalidate,adminValidate,getContactdata);
adminrouter.route('/deletebyId/:id').delete(loginvalidate,adminValidate,deletebyId);
adminrouter.route('/updatebyId/:id').patch(loginvalidate,adminValidate,updatebyId);
adminrouter.route('/user/:id').get(loginvalidate,adminValidate,userbyId);
adminrouter.route('/deleteContact/:Contactid').delete(loginvalidate,adminValidate,deleteContact);
export default adminrouter;