import { Request, Response } from 'express';
import * as duyuruService from '../services/duyuru.service';

export const getAllDuyurular = async (req: Request, res: Response) => {
  try {
    const duyurular = await duyuruService.getAll();
    res.json(duyurular);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const getDuyuruById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const duyuru = await duyuruService.getById(id);
    if (!duyuru) {
      return res.status(404).json({ error: 'Duyuru bulunamadı' });
    }
    res.json(duyuru);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const createDuyuru = async (req: Request, res: Response) => {
  try {
    const { title, content } = req.body;
    const yeniDuyuru = await duyuruService.create({ title, content });
    res.status(201).json(yeniDuyuru);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const updateDuyuru = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const { title, content } = req.body;
    const guncellenenDuyuru = await duyuruService.update(id, { title, content });
    res.json(guncellenenDuyuru);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const deleteDuyuru = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    await duyuruService.remove(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
