import express from 'express';
import validate from '../middleware/valid-middleware.js';
import signupSchema from '../validator/auth-valid.js';
import loginvalidate from '../middleware/login-middleware.js';
import {user,postbyemail,login} from '../controller/auth-controller.js';


const router=express.Router();
router.route('/register').post(validate(signupSchema),postbyemail);
router.route('/user').get(loginvalidate,user);
router.post('/login',login);


export default router;