import  express  from "express";
import schoolmanage from './routs/schoolmanage'
import 'dotenv/config';
import { connectDB } from './config/db';
const app = express();

 connectDB();

//middleware 

app.use(express.json());
app.use('/api/v1/bookmanage', schoolmanage);
const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log('server is running in port: '+ PORT); 
});