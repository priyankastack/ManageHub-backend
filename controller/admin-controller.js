import Employee from "../models/model.js";
import Contact from "../models/contact-model.js";




 export const getAllusers=async(req,res)=>{
    try {
         
    let response=await Employee.find().select({password:0});
    if(response.length===0){
        return res.status(400).json({
            message:"No data found.",
            success:false,
        });
    }else{
        return res.status(200).json({
        message:"data fetched successfully!",
        success:true,
        data:response
       });
       
    }

    } catch (error) {
         console.log(error);
    }
}

export const getContactdata=async(req,res)=>{
    try {
        
    let response=await Contact.find();
    if(response.length===0){
        return res.status(400).json({
            message:"No data found.",
            success:false,
        });
    }
       res.status(200).json({
        message:"data fetched successfully!",
        success:true,
        data:response
       });
    
    } catch (error) {
       return res.status(500).json({
           success:false,
           message:"internal server error",
           error:error.message

        });
        
    }
}
export const userbyId=async(req,res)=>{
    const {id}=req.params;

    try {
        const userExist=await Employee.findById(id);
        if(!userExist){
            return res.status(400).json({
                message:"Data not fetched!",
                success:false
            });
        }
        else{
            return res.status(200).json({
                message:"Data fetched successfully!",
                success:true,
                data:userExist
            });
        }
       
    } catch (error) {
        res.status(500).json({
            message:"Cannot getting data!",
            success:false
        })
        console.log(error);
    }
}

 export const deletebyId=async(req,res)=>{
    try{
        const {id}=req.params
        const userExist=await Employee.findById(id);
        if(!userExist){
            return res.status(400).json({
                message:"Usernot exist ",
                succsess:false
            });
        }
        await Employee.findByIdAndDelete(id);
        res.status(201).json({
            message:"deletion successfull",
            success:true
        });
    }catch(error){
        console.log(error);
    }
}

export const updatebyId=async(req,res)=>{
    const id=req.params.id;
    const dataToupdate=req.body;
    try {
        const updateData=await Employee.updateOne({_id:id},{
            $set:dataToupdate,
        });
        return res.status(200).json({
            message:"Data updated successfully!",
            success:true,
            data:updateData
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:error.message,
            success:false
        });
    }
}
export const deleteContact=async(req,res)=>{
    const{Contactid} =req.params;
try {
    const userExist=await Contact.findById(Contactid);
    if(!userExist){
        return res.status(400).json({
            message:"User not exist!",
            success:false
        });
    }else
    {
        await Contact.findByIdAndDelete(Contactid);
        return res.status(200).json({
            message:"Deleted successfully!",
            success:true,
        });
    }
} catch (error) {
    res.status(500).json({
        message:"Deletion Failed",
        success:false,
    });
    console.log(error);
}
}


