import { Request, Response } from 'express';
import * as haberService from '../services/haber.service';

export const getAllHaberler = async (req: Request, res: Response) => {
  try {
    const haberler = await haberService.getAll();
    res.json(haberler);
  } catch (error) {
    console.error('getAllHaberler error:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

export const getHaberById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    console.log('Fetching Haber with ID:', id);
    const haber = await haberService.getById(id);
    console.log('Found Haber:', haber);
    if (!haber) {
      return res.status(404).json({ error: 'Haber bulunamadı' });
    }
    res.json(haber);
  } catch (error) {
    console.error('getHaberById error:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

export const createHaber = async (req: Request, res: Response) => {
  try {
    const { title, content } = req.body;
    console.log('createHaber data:', { title, content });
    const yeniHaber = await haberService.create({ title, content });
    res.status(201).json(yeniHaber);
  } catch (error) {
    console.error('createHaber error:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

export const updateHaber = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const { title, content } = req.body;
    console.log('UpdateHaber ID:', id, 'Data:', { title, content });
    const guncellenenHaber = await haberService.update(id, { title, content });
    res.json(guncellenenHaber);
  } catch (error) {
    console.error('updateHaber error:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

export const deleteHaber = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    console.log('DeleteHaber ID:', id);
    await haberService.remove(id);
    res.status(204).send();
  } catch (error) {
    console.error('deleteHaber error:', error);
    res.status(500).json({ error: 'Server error' });
  }
};
