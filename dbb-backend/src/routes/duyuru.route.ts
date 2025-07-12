import { Router } from 'express';
import {
  getAllDuyurular,
  getDuyuruById,
  createDuyuru,
  updateDuyuru,
  deleteDuyuru,
} from '../controllers/duyuru.controller';

const router = Router();

router.get('/', getAllDuyurular);
router.get('/:id', getDuyuruById);
router.post('/', createDuyuru);
router.put('/:id', updateDuyuru);
router.delete('/:id', deleteDuyuru);

export default router;
