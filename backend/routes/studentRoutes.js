import express from 'express';
import { studentRegister,studentLogin ,studentProfile } from '../controllers/studentControllers.js';
import {studentAuth} from '../middleware/studentMiddleware.js';

const studentRouter = express.Router();

studentRouter.post('/login',studentLogin);
studentRouter.post('/register',studentRegister);
studentRouter.get('/profile',studentAuth,studentProfile);


export default studentRouter;
