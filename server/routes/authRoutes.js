import express from 'express';
import  verifyUserAuth  from '..//utils/middleware/verifyUserAuth.js';
import {  authCheck  } from  '../controller/authController.js'

const router = express.Router();

router.get('/check',verifyUserAuth,authCheck)

export default router;