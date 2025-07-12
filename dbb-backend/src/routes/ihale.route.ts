import { Router } from 'express';
import {
  getAllIhaleler,
  getIhaleById,
  createIhale,
  updateIhale,
  deleteIhale,
} from '../controllers/ihale.controller';

const router = Router();

router.get('/', getAllIhaleler);
router.get('/:id', getIhaleById);
router.post('/', createIhale);
router.put('/:id', updateIhale);
router.delete('/:id', deleteIhale);

export default router;
