import express from 'express'
import { config } from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import connectDB from './config/dbConnect.mjs'
import ErrorObject from './utils/ErrorObject.js'
import SongRoute from "./routes/songRoute.js"

config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET", "DELETE", "PUT"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"], // Add any other headers you need
  }));
app.use(cookieParser());
app.use(cors({
    origin: ["https://song-managment.netlify.app", "http://localhost:3000"],
    methods: ["POST", "GET", "DELETE", "PUT"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"], // Add any other headers you need
  }));
app.get('/', (req, res)=>{
    res.json('Hello Motherfucker')
})
app.use('/Songs', SongRoute)
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