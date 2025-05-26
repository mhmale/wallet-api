import express from 'express';
import {
  createTransaction,
  getTransactionByUserId,
  deleteTransaction,
  getSummaryByUserId
} from '../controllers/transactionController.js';

const router = express.Router();

router.post('/', createTransaction);

router.get('/:userId', getTransactionByUserId);

router.delete('/:id', deleteTransaction);

router.get('/summary/:userId', getSummaryByUserId);


export default router;