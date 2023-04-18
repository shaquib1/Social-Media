const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRouter=require('./routes/users');
const authRouter=require('./routes/auth');

dotenv.config();

//mongoose.connect(
  //"mongodb+srv://shaquib_1:mongodb2615@cluster1.rupziha.mongodb.net/test"
//).then(()=>app.listen(5000)).then(()=>console.log("connected mongodb successfully at local host 5000")).catch((err)=>console.log(err));
 
//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.use('/api/users',userRouter);
app.use('/api/auth',authRouter);



app.listen(5000,()=>{
  console.log("backend server is running");
})