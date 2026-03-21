import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import path from 'path';
import connectDB from "./config/db.js";
import userRouter from './routes/userRouter.js';
import movieRouter from './routes/movieRouter.js';
import bookingRouter from './routes/bookingRouter.js';


const app = express();


// Middleware
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Database Connection
connectDB();

// Routes
app.use("/uploads", express.static(path.join(process.cwd(), "uploads"))); 
app.use("/api/auth", userRouter)
app.use("/api/movies", movieRouter);
app.use("/api/bookings", bookingRouter);



app.get('/', (req, res) => {
    res.send('API Working');
});

app.listen(process.env.port, () => {
    console.log(`Server Started on ${process.env.port}`);
});
