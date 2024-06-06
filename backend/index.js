import express, { request, response } from "express";
import { PORT , mongoDBURL } from "./config.js";
import bookRoute from "./routes/bookRoute.js"
import mongoose from "mongoose";
import cors from "cors";

// Creating express app
const app = express();

//Middleware
app.use(express.json());

app.use(cors());

// app.use(cors({
//     origin : 'http://localhost:8000',
//     methods : ['GET' , 'POST' , 'PUT' , 'DELETE'],
//     allowedHeaders : ['Content-Type']
// }))

// Root route
app.get("/" , (request , response) => {
    console.log("Welcome to the website");
    return response.status(200).send({message : "Welcome to the book store"});
})


// Middleware for managing the route
app.use('/books' , bookRoute);

// Database connections !!
mongoose.connect(mongoDBURL)
.then(() => {
    console.log('App connected to the database')
    app.listen(PORT , ()=> {
        console.log(`App is listening to port: ${PORT}`);
    })
})
.catch((error) => {
    console.log(error);
})