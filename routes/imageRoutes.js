import express from 'express'
import { generateImage } from '../Controller/imageController.js'
import userAuth from '../Middlewares/auth.js'

const imageRouter = express.Router()

imageRouter.post('/generate-image', userAuth, generateImage)

export default imageRouter