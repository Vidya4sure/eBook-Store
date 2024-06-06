import express from "express";
import { Book } from "../models/bookModel.js";

const router = express.Router();

// Routes to save our book
router.post('/' , async (request , response) => {

    // in future I will use ZOD library for input validation
    try {
        if(!request.body.title || !request.body.author || !request.body.publishYear){
            return response.status(400).send({message : 'send required title , author , publishYear'});
        }

        const newBook = {
            title : request.body.title, 
            author : request.body.author,
            publishYear : request.body.publishYear
        }

        const book = await Book.create(newBook);

        return response.status(201).send(book);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message : error.message});
    }
})

// Rout to get all the books
router.get("/" , async (request , response) => {
   try {
    const books = await Book.find({});

    return response.status(201).json({
        count : books.length, 
        data : books 
    })
   } catch (error) {
    console.log(error.message);
    response.status(500).send({message : error.message});
   }
})

// Rout to a single book by id
router.get("/:id" , async (request , response) => {
    try {

     const { id } = request.params;

     const book = await Book.findById(id);
 
     return response.status(201).json(book)
    } catch (error) {
     console.log(error.message);
     response.status(500).send({message : error.message});
    }
 })

// Rout to undate the book
router.put("/:id" , async (request , response) => {
    try {
        if(!request.body.title || !request.body.author || !request.body.publishYear){
            return response.status(400).send({
                message : "Send all the required field : title , author , publishing year"
            })
        }

        const { id } = request.params;

        const result = await Book.findByIdAndUpdate(id , request.body);

        if(!result){
            return response.status(404).send({message : "Book not found"});
        }

        return response.status(200).send({message : "Book updated succesfully"});
        
    } catch (error) {
        console.log(error.message);
        return response.status(500).send({message : error.message});
    }
})

// Route to delet the book by id 
router.delete('/:id' , async (request , response) => {
    try {
        const {id} = request.params;

        const result = await Book.findByIdAndDelete(id);

        if(!result){
            return response.status(404).send({message : "Book in not found"});
        }

        return response.status(200).send({message : "Book is succesfully deleted"});
        
    } catch (error) {
        console.log(error.message);
        return response.status(500).send({message : error.message})
    }
})

export default router ;