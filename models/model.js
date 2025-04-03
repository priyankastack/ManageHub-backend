import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
const userSchema= new mongoose.Schema({
   username:{type:String,required:true},
   email:{type:String,required:true},
   password:{type:String,required:true},
   phone:{type:Number,required:true},
  isAdmin:{type:Boolean,default:false}
});
//json web token(jwt)
userSchema.methods.generateToken=async function(){
try {
  if (!process.env.SECRET_KEY) {
    throw new Error("SECRET_KEY is not defined in environment variables.");
  }
  return jwt.sign({
    userId:this._id.toString(),
    email:this.email,
    isAdmin:this.isAdmin
  },process.env.SECRET_KEY,{
    expiresIn:'1hr',
  });
} catch (error) {
  console.error(error);
}
}
const   Employee=mongoose.model('Employee',userSchema);
export default  Employee;