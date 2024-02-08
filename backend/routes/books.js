const express=require('express')
const router=express.Router()

const {getBooks,getBook,createBook,deleteBook,updateBook}=require('../controllers/books')

router.route('/').get(getBooks).post(createBook)
router.route('/:id').get(getBook).patch(updateBook).delete(deleteBook)

module.exports=router