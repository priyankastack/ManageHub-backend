import express from 'express';
import Contact from "../models/contact-model.js";


const Contactform=async(req,res)=>{
    try{
        const {name,email,message}=req.body;
        const info= await Contact.create({name,email,message});
        if(info){
            return res.status(200).json({
                message:"Form submitted successfully!",
                success:true,
                data:info
            });
        }
    }
    catch(error){
        return res.status(500).json({
            message:"Page not found.",
            success:false,
            data:error
        });
    }
}

export default Contactform;