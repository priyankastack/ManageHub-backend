import express from 'express';
import cors from 'cors';
import router from './routes/auth-router.js';
import contactrouter from './routes/contact-router.js';
import servicerouter from './routes/service-router.js';
import adminrouter from './routes/admin-router.js';
import connectdb from './config/database.js';
import dotenv from 'dotenv';

dotenv.config();
const app=express();
const corsOptions={
    origin:"https://manage-hub-sepia.vercel.app",
    methods:"GET,POST,UPDATE,DELETE,PATCH,HEAD",
    credentials:true
}
app.use(cors(corsOptions));
app.use(express.urlencoded({extended:false}));
app.use(express.json()); 
app.use('/api',[router,contactrouter,servicerouter]);      //because app.use() expects a single middleware function or an array of middleware functions as its second argument.
app.use('/api/admin',adminrouter);
connectdb()
.then(app.listen(8000,()=>{console.log("Server has been started.")}));

