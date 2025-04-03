import mongoose from 'mongoose';
const connectdb=async()=>{
    try{
        await mongoose.connect('mongodb+srv://priyankastack:zMzmE8YbTIy6VlH5@nk.v49wg.mongodb.net/?retryWrites=true&w=majority&appName=nk');
        console.log("database connected.");
    }catch(error){
        console.log(error);
        process.exit(1);
    }
}
export default connectdb;