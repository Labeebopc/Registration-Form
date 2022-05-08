import express from 'express'
import { addNewRegistration, Login, getUser, verifyToken } from "../controllers/registrationController.js";

 
const router = express.Router()

router.post('/register', addNewRegistration)
router.post('/login', Login)
router.get('/user', verifyToken, getUser)



export default router;
