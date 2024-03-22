const routes=require('./routes/books')
const {port,MONGO_URI}=require('./config')
const connectDb=require('./db/dbConnect')
const cors =require('cors')
const express=require('express')
const app=express()

app.use(express.json())
app.use(cors({
    origin:'https://book-store-delta-mauve.vercel.app',
    methods:['GET','POST','PATCH','DELETE'],
    allowedHeaders:['Content-Type'],    
}))
app.use('/api/v1/books',routes)

const start = async () => {
    try {
        await connectDb(MONGO_URI)
        app.listen(port, () =>
            console.log(`Server is listening on port ${port}...`)
        );
    } 
    catch (error) {
        console.log(error);
    }
}

start();
