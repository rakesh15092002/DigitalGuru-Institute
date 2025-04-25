import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import studentRouter from './routes/studentRoutes.js';
import courseRouter from './routes/courseRoute.js';

// Load environment variables
dotenv.config();

// App config
const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());

// API Routes
app.use("/api/student", studentRouter);  // ✅ Check this is correctly defined
app.use("/api/course",courseRouter);

// Database connection
connectDB();

app.get("/", (req, res) => {
    res.send("API is running...");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
