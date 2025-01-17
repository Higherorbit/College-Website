import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
dotenv.config();
// Connect to MongoDB
mongoose.connect(process.env.MONGO).then(() => {

    console.log('Connected to MongoDB!');
    })
    .catch((err)=> {
        console.log('Failed to connect to MongoDB!', err);
    });

const app = express();

app.listen(3002, () => {
    console.log('Server is running on port 3002!');
    }
);

app.use("/api/user",userRoutes);