import express from 'express';
import dotenv from 'dotenv';
import transactionRoute from './routes/transactionRoute.js';
import { connectToDatabase } from './config/db.js'; // Adjust the path as necessary
dotenv.config();
// Initialize the Express application

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

const PORT = process.env.PORT || 5001;
// Middleware to parse JSON bodies


app.use('/api/transactions', transactionRoute); // Use the transaction routes)


connectToDatabase().then(() => {
        app.listen(PORT, () => {
        console.log('Server is running on port:', PORT);
        });
    });