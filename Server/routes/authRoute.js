import express from 'express'
import { signUp, signIn, getUserProfile } from '../controllers/authController.js'
import auth from '../middlewares/auth.js'


const router = express.Router();


router.post('/signup', signUp);
router.post('/signin', signIn);
router.get('/user', auth, getUserProfile);

export default router;

