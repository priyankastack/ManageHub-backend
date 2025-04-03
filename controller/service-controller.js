import Service from '../models/service.js';

const getservice=async(req,res)=>{
    try{
        const response=await Service.find();
        if(!response){
           return res.status(400).json({
               message:"data not fetched",
               status:false
            });
        }
        res.status(200).json({
            message:"Data fetched successfully.",
            data:response,
            success:true 
        });
    }catch(error){
        console.error(error);
    }

}

export default getservice;