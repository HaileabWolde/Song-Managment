import express from 'express'
import { createSong, getAllSong, getSingleSong, 
   updateSong, deleteSong, getStats, getSongBySearch} from '../controllers/Songs.js'

const router = express.Router()
router.get('/AllSong', getAllSong)
router.get('/statics', getStats)
router.get('/search', getSongBySearch)
router.get('/getsingleSong/:id', getSingleSong)
router.post('/createSong' , createSong)
router.put('/updateSong/:id', updateSong)
router.delete('/deleteSong/:id', deleteSong)

export default router;