const validate=(schema)=>async(req,res,next)=>{
 try {
       const parsebody=await schema.parseAsync(req.body);
       req.body=parsebody;
       next();
 } catch (error) {
     return res.status(400).json({message:error});
 }
}
export default validate;