import express from 'express';
import { addStudent, getAllStudent, removeStudent } from '../controllers/adminControllers.js';

const adminRouter = express.Router();
adminRouter.post('/add-student', addStudent);
adminRouter.get('/get-student',getAllStudent);
adminRouter.delete('/remove-student/:id',removeStudent)

export default adminRouter;
