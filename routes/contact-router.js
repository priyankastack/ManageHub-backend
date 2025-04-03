import express from 'express';
import validate from '../middleware/valid-middleware.js';
import ContactformSchema from '../validator/contact-valid.js'
import Contactform from '../controller/contact-controller.js'

 const contactrouter=express.Router();


 contactrouter.route('/contact').post(validate(ContactformSchema),Contactform);



 export default contactrouter; 