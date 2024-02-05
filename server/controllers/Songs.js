import {ErrorHandler} from "../middlewares/ErrorHandler.js"
import SongSchema from "../Model/SongModel.js"

export const getAllSong = async(req ,res, next)=> {
    try{
        const AllSong = await SongSchema.find({})
       return  res.status(200).json(AllSong);

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
       return  res.status(200).json(SingleSong)
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
       return  res.status(200).json(UpdatedSong);
    }
    catch(error){
        console.log(error.message)
        return next(error)
    }

}

export const deleteSong = async(req, res, next)=> {
    const {id}= req.params

    try{
        const DeleteSong = await SongSchema.findByIdAndDelete(id)
       return  res.status(200).json(DeleteSong)
    }
    catch(error){
        return next(error)
    }
}

export const getStats = async(req,res, next)=>{
    try{
        const totalSongs = await SongSchema.countDocuments();
        const uniqueArtists = await SongSchema.distinct('Artist');
       
        const totalArtists = uniqueArtists.length;
    
        const uniqueAlbums = await SongSchema.distinct('Album');
        const totalAlbums = uniqueAlbums.length;
       
        const uniqueGenres = await SongSchema.distinct('Genre');
        const totalGenres = uniqueGenres.length;
    
        const genresCount = await SongSchema.aggregate([
            { $group: { _id: '$Genre', count: { $sum: 1 } } }
          ]);
      
          const artistSongsCount = await  SongSchema.aggregate([
            { $group: { _id: '$Artist', totalSongs: { $sum: 1 } } }
          ]);
      
          const artistAlbumsCount = await SongSchema.aggregate([
            { $group: { _id: '$Artist', totalAlbums: { $sum: 1 } } }
          ]);
          const AlbumCountSong = await SongSchema.aggregate([
            { $group: { _id: '$Album', totalSongs: { $sum: 1 } } }
          ]);
        return res.json({
            totalSongs,
            totalArtists,
            totalAlbums,
            totalGenres,
            genresCount,
            artistSongsCount,
            artistAlbumsCount,
            AlbumCountSong
          });
    }
    catch(error){
        console.log(error)
        return next(error)
    }
}