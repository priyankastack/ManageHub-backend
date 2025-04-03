import {z} from 'zod';

//creating an object schema
const  ContactformSchema=z.object({
 name:z.string({required_error:"name is required"}).trim().min(3,{message:"Name must be at least of 3 characters."})
  .max(255,{message:"Name must not be greater than 255 characters."}),
  email:z.string({required_error:"Invalid email address"}).trim().min(3,{message:"Email must be at least of 3 characters."})
  .max(255,{message:"Email must not be greater than 255 characters."}),
  message:z.string({required_error:"message is required"}).trim().min(10,{message:"message must contain 10 words."})
  .max(255,{message:"Email must not be greater than 255 characters."}),
 

});


export default ContactformSchema;