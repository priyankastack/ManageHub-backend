import {z} from 'zod';

//creating an object schema
const  signupSchema=z.object({
  username:z.string({required_error:"Usename is required"}).trim().min(3,{message:"Name must be at least of 3 characters."})
  .max(255,{message:"Name must not be greater than 255 characters."}),
  email:z.string({required_error:"Invalid email address"}).trim().min(3,{message:"Email must be at least of 3 characters."})
  .max(255,{message:"Email must not be greater than 255 characters."}),
  password:z.string({required_error:"Password is required"}).trim().min(8,{message:"Password must be at least of 8 characters."})
  .max(255,{message:"Password  must not be greater than 12 characters."}),
  phone:z.string({required_error:"Phone is required"}).trim().min(10,{message:"Phone must be at least of 10 characters."})


});


export default signupSchema;
