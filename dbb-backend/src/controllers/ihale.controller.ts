import { Request, Response } from 'express';
import * as ihaleService from '../services/ihale.service';

export const getAllIhaleler = async (req: Request, res: Response) => {
  try {
    const ihaleler = await ihaleService.getAll();
    res.json(ihaleler);
  } catch (error) {
    console.error('getAllIhaleler error:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

export const getIhaleById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const ihale = await ihaleService.getById(id);
    if (!ihale) {
      return res.status(404).json({ error: 'İhale bulunamadı' });
    }
    res.json(ihale);
  } catch (error) {
    console.error('getIhaleById error:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

export const createIhale = async (req: Request, res: Response) => {
  try {
    const { title, description, date } = req.body;
    const yeniIhale = await ihaleService.create({ title, description, date });
    res.status(201).json(yeniIhale);
  } catch (error) {
    console.error('createIhale error:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

export const updateIhale = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const { title, description, date } = req.body;
    const guncellenenIhale = await ihaleService.update(id, { title, description, date });
    res.json(guncellenenIhale);
  } catch (error) {
    console.error('updateIhale error:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

export const deleteIhale = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    await ihaleService.remove(id);
    res.status(204).send();
  } catch (error) {
    console.error('deleteIhale error:', error);
    res.status(500).json({ error: 'Server error' });
  }
};
