import request from 'supertest';
import app from '../src/app';
import prisma from '../src/prismaClient';

beforeAll(async () => {
  await prisma.ihale.deleteMany();
});

afterAll(async () => {
  await prisma.$disconnect();
});

describe('İhale API', () => {
  it('POST /api/ihale oluşturur ve GET, PUT, DELETE yapar', async () => {
    const postRes = await request(app)
      .post('/api/ihale')
      .send({ title: 'Test Ihale', description: 'Test açıklama' });
    expect(postRes.statusCode).toBe(201);
    const id = postRes.body.id;

    const getRes = await request(app).get(`/api/ihale/${id}`);
    expect(getRes.statusCode).toBe(200);
    expect(getRes.body.id).toBe(id);

    const putRes = await request(app)
      .put(`/api/ihale/${id}`)
      .send({ title: 'Güncellenmiş Ihale', description: 'Güncellenmiş açıklama' });
    expect(putRes.statusCode).toBe(200);
    expect(putRes.body.title).toBe('Güncellenmiş Ihale');

    const deleteRes = await request(app).delete(`/api/ihale/${id}`);
    expect(deleteRes.statusCode).toBe(204);
  });

  it('GET /api/ihale listelemeli', async () => {
    await prisma.ihale.create({ data: { title: 'Ihale 1', description: 'Açıklama 1' } });
    await prisma.ihale.create({ data: { title: 'Ihale 2', description: 'Açıklama 2' } });

    const res = await request(app).get('/api/ihale');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThanOrEqual(2);
  });
});
