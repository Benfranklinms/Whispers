import express from 'express'
import { createConfession, getAllConfessions, getMyConfessions } from '../controllers/confessionController.js'
import auth from '../middlewares/auth.js';


const router = express.Router();


router.post('/add', auth, createConfession);
router.get('/all', getAllConfessions);
router.get('/my', auth, getMyConfessions);

export default router;