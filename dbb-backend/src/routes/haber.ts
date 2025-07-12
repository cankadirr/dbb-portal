import { Router } from 'express';
import prisma from '../prismaClient';

const router = Router();

router.get('/', async (req, res) => {
  const haberler = await prisma.haber.findMany();
  res.json(haberler);
});

router.post('/', async (req, res) => {
  const { title, content } = req.body;
  const yeniHaber = await prisma.haber.create({
    data: { title, content }
  });
  res.status(201).json(yeniHaber);
});

export default router;
