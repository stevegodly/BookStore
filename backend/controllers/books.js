const Book = require('../models/book')
const asyncWrapper=require('../middleware/async')


const getBooks=asyncWrapper(async(req,res,next)=>{
    const books=await Book.find({})
    if(!books) next(createCustomError(`No books at all: ${bookId}`, 404))
    res.status(200).send(books)
})
    

const getBook=asyncWrapper(async(req,res,next)=>{
        const {id:bookId}=req.params
        const book= await Book.findOne({_id:bookId})
        if(!book) next(createCustomError(`No book with id : ${bookId}`, 404))
        res.status(201).send(book)
})

const createBook=asyncWrapper(async (req,res,next)=>{
        if(!req.body.title || !req.body.author || !req.body.publishYear){
            return res.status(400).send({message:'send all required fields'})
        }
        const book =await Book.create(req.body)
        if(!book) next(createCustomError(`No book created`, 404))
        res.status(201).send(book)
})


const deleteBook=asyncWrapper(async (req,res,next)=>{
        const {id:bookId}=req.params
        const deletedBook=await Book.findOneAndDelete({_id:bookId})
        if(!deletedBook) next(createCustomError(`No book found for deletion`, 404))
        res.status(200).json({message:`Deleted book is :${deletedBook}`})
})


const updateBook=asyncWrapper(async (req,res,next)=>{
        const {id:bookId}=req.params
        const updatedBook=await Book.findOneAndUpdate({_id:bookId}, req.body)
        if(!updatedBook) next(createCustomError(`No book found for updation`, 404))
        res.status(200).json({message:`Updated book is :${updatedBook}`})
})

module.exports={getBook,getBooks,createBook,deleteBook,updateBook}