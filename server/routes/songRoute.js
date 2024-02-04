import express from 'express'

const router = express.Router()
router.get('/' , (req ,res)=> {
   return  res.send("Get this Songs out of Here")
})

export default router;