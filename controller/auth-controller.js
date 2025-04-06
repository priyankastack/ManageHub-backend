import  Employee from '../models/model.js'
import bcrypt from 'bcryptjs' ;

export const postbyemail=async(req,res)=>{
    const {username,email,password,phone}=req.body;
    const userExist=await  Employee.findOne({email});
    try{
        if(userExist){
            return res.status(400).json({
                message:"User already exist.",
            });
        }
 //hash the password
        const saltRound=10;
        const hash_password = await bcrypt.hash(password,saltRound);
            const newEmp=await  Employee.create({username,email,phone,password:hash_password});
            res.status(200).json({
                message:"Registered Successfully!.", 
                success:true,
                data:newEmp,
                token:await newEmp.generateToken(),
                userId:newEmp.id.toString(),
            });
    }catch(error){
        res.status(500).json({
            message:"registration page not found.",
            success:false
        });
    }
}
export const user=async(req,res)=>{
    try{
    const userData=req.user;
      return  res.status(201).json({
            message:"hello user!",
            data:userData
        })
       
    }catch(error){
        res.status(500).json({
            message:"home page not found.",
            success:false,
         
        });
    }
    
}
 
//login controller
export const login=async(req,res)=>{
    try {
         const {email,password}=req.body
        let userExist=await Employee.findOne({email:email});
        if(!userExist){
           return res.status(400).json({
                message:"Invalid credentials.",
            });
        }
          const isPasswordValid=await bcrypt.compare(password,userExist.password);
         if(isPasswordValid){
            return res.status(200).json({
                message:"Login succsessfull",
                success:true,
                data:userExist,
                token:await userExist.generateToken(),
                userId:userExist.id.toString()
             });
            }
         else{
           return  res.status(401).json({
                message:"Invalid credentials.",
                success:false
            })
        }
    } catch (error) {
         return res.status(500).json({
            message:"Login failed.",
            success:false
     });
    }
}























/*
export const getall=async(req,res)=>{
    try{
        res.status(200).json({
            message:"data fetched successfully!",
            success:true,
    
        });
    }catch(error){
        res.status(500).json({
            message:"data not fetched.",
            success:false,
    
        });
    }
    
}
export const getbyId=async(req,res)=>{
    try{
        res.status(200).json({
            message:"data fetched successfully!",
            success:true,
    
        });
    }catch(error){
        res.status(500).json({
            messag:"data not fetched.",
            success:false,
    
        });
    }
    
}
 export const postbyId=async(req,res)=>{
    try{
        res.status(200).json({
          message:"data created successfully!",
          status:true
        });
    }catch(error){
        res.status(500).json({
            message:"data  not created!",
            status:false
          });
    }
   
}

 export const delbyId=async(req,res)=>{
    try{
        res.status(200).json({
          message:"data deleted successfully!",
          status:true
        });
    }catch(error){
        res.status(500).json({
            message:"data  not deleted!",
            status:false
          });
    }
   
}
 export const putbyId=async(req,res)=>{
    try{
        res.status(200).json({
          message:"data updated successfully!",
          status:true
        });
    }catch(error){
        res.status(500).json({
            message:"data  not updated!",
            status:false
          });
    }
   
}*/



