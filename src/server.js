import express from 'express';
import dotenv from 'dotenv';
import transactionRoute from './routes/transactionRoute.js';
import { connectToDatabase } from './config/db.js'; // Adjust the path as necessary
import job from "./config/cron.js"; // Import the job configuration


dotenv.config();
// Initialize the Express application

const app = express();

if(process.env.NODE_ENV === "production")job.start(); // Start the cron job

app.use(express.json()); // Middleware to parse JSON bodies

const PORT = process.env.PORT || 5001;
// Middleware to parse JSON bodies

app.get('/api/health', (req, res) => {
    res.status(200).json({status: 'ok'});
});


app.use('/api/transactions', transactionRoute); // Use the transaction routes)


connectToDatabase().then(() => {
        app.listen(PORT, () => {
        console.log('Server is running on port:', PORT);
        });
    });