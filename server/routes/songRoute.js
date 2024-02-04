import express from 'express'
import { createSong, getAllSong, getSingleSong, 
   updateSong, deleteSong, getStats} from '../controllers/Songs.js'

const router = express.Router()
router.get('/AllSong', getAllSong)
router.get('/statics', getStats)
router.get('/getsingleSong/:id', getSingleSong)
router.post('/createSong' , createSong)
router.patch('/updateSong/:id', updateSong)
router.delete('/deleteSong/:id', deleteSong)

export default router;