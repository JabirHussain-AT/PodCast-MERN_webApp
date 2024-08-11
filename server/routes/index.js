import express from 'express'
import authRoutes from './authRoutes.js'
import projectRoutes from './projectRoutes.js'

const router   = express.Router()

//for authentication routes
router.use('/auth',authRoutes)
router.use('/project',projectRoutes)

export default router;