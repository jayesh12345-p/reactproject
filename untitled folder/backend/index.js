const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
//dotenv
const helmet = require('helmet');
//helmet ensure security
const morgan = require('morgan');
//Morgan is a middleware that logs HTTP requests and errors
const userRoute = require('./routes/users')
const postRoute = require('./routes/posts')
const auth = require('./routes/auth')
const multer = require('multer')
const path =require('path')
dotenv.config();

mongoose.connect(process.env.MongoURL,{useNewUrlParser:true}).then(()=>{
    console.log("connected to mongo");
}).catch((e)=>{console.log('not connected'+process.env.MongoURL)})

app.use("/images", express.static(path.join(__dirname,"public/images")))
//middleware
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"public/images")
    },
    filename:(req,file,cb)=>{
        console.log(req.body);
        console.log(11111);
        cb(null,req.body.name)
    }
})
const upload = multer({storage:storage});
app.post("/api/upload",upload.single("file"),(req,res)=>{
    try {
        return res.status(200).json("File uploaded successfully.")
    } catch (error) {
        console.log(error);
    }
})
app.use("/api/users" , userRoute)
app.use("/api/auth" , auth)
app.use("/api/post" , postRoute)



app.listen(8800,()=>{
    console.log("Server is running");
})