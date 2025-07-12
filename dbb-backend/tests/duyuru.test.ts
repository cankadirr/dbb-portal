import request from 'supertest';
import app from '../src/app';
import prisma from '../src/prismaClient';

beforeAll(async () => {
  await prisma.duyuru.deleteMany(); // Test öncesi veritabanını temizle
});

afterAll(async () => {
  await prisma.$disconnect();
});

describe('Duyuru API', () => {
  let duyuruId: number;

  it('POST /api/duyuru yeni duyuru oluşturmalı', async () => {
    const res = await request(app)
      .post('/api/duyuru')
      .send({ title: 'Test Duyuru', content: 'Test içerik' });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    duyuruId = res.body.id;
  });

  it('GET /api/duyuru duyuruları listelemeli', async () => {
    const res = await request(app).get('/api/duyuru');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('GET /api/duyuru/:id tek bir duyuru getirmeli', async () => {
    const res = await request(app).get(`/api/duyuru/${duyuruId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.id).toBe(duyuruId);
  });

  it('PUT /api/duyuru/:id duyuruyu güncellemeli', async () => {
    const res = await request(app)
      .put(`/api/duyuru/${duyuruId}`)
      .send({ title: 'Güncellenmiş Duyuru', content: 'Güncellenmiş içerik' });
    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe('Güncellenmiş Duyuru');
  });

  it('DELETE /api/duyuru/:id duyuruyu silmeli', async () => {
    const res = await request(app).delete(`/api/duyuru/${duyuruId}`);
    expect(res.statusCode).toBe(204);
  });
});
