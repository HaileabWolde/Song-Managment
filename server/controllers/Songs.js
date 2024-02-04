import {ErrorHandler} from "../middlewares/ErrorHandler.js"
import SongSchema from "../Model/SongModel.js"

export const getAllSong = async(req ,res, next)=> {
    try{
        const AllSong = await SongSchema.find({})
        res.status(200).json(AllSong);

    }
    catch(error){
        console.log(error)
        next(error)
    }
}
export const getSingleSong  = async(req, res, next)=> {
    const {id} = req.params
    try{
        const SingleSong = await SongSchema.findById(id)
        res.status(200).json(SingleSong)
    }
    catch(error){
        console.log(error)
        next(error)
    }
}

export const createSong = async(req, res, next)=> {
    const {Title, Artist, Album, Genre} = req.body
    try{
        const result = await SongSchema.create({
            Title,
            Artist,
            Album,
            Genre
        })
        return res.status(200).json({result})
    }
    catch(error){
        console.log(error.message);
        next(error)
    }
} 

export const updateSong = async (req, res, next)=>{

    const {id} = req.params

    try{
        const UpdatedSong = await SongSchema.findByIdAndUpdate(id, req.body, {new: true})
        res.status(200).json(UpdatedSong);
    }
    catch(error){
        return next(error)
    }

}

export const deleteSong = async(req, res, next)=> {
    const {id}= req.params

    try{
        const DeleteSong = await SongSchema.findByIdAndDelete(id)
        res.status(200).json({msg: "Deleted Successfully"})
    }
    catch(error){
        return next(error)
    }
}