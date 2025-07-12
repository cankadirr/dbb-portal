import { Router } from 'express';
import {
  getAllHaberler,
  getHaberById,
  createHaber,
  updateHaber,
  deleteHaber,
} from '../controllers/haber.controller';

const router = Router();

router.get('/', getAllHaberler);
router.get('/:id', getHaberById);
router.post('/', createHaber);
router.put('/:id', updateHaber);
router.delete('/:id', deleteHaber);

export default router;
