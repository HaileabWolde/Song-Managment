import express from 'express'
import { config } from 'dotenv'
import cookieParser from 'cookie-parser'
import connectDB from './config/dbConnect.mjs'
import ErrorObject from './utils/ErrorObject.js'


config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())

app.use(cookieParser());

app.get('/', (req, res)=>{
    res.json('Hello')
})

app.use(ErrorObject)
const start = async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, ()=>{
            console.log(`Server is listening on port ${PORT}`)
        })
    }
    catch(error){
        console.log(error.message)
    }
   
}
start()