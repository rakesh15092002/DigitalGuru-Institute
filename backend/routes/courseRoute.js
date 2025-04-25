import express from 'express';
import { addCourse, deleteCourse, getAllCourses } from '../controllers/courseControllers.js';

const courseRouter = express.Router();

courseRouter.post('/add',addCourse);
courseRouter.get('/get', getAllCourses);
courseRouter.post('/delete/:id', deleteCourse);

export default courseRouter;