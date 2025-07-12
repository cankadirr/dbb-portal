import request from 'supertest';
import app from '../src/app';
import prisma from '../src/prismaClient';

beforeAll(async () => {
  await prisma.haber.deleteMany();
});

afterAll(async () => {
  await prisma.$disconnect();
});

describe('Haber API', () => {
  it('POST /api/haber oluşturur ve GET, PUT, DELETE yapar', async () => {
    const postRes = await request(app)
      .post('/api/haber')
      .send({ title: 'Test Haber', content: 'Test içerik' });
    expect(postRes.statusCode).toBe(201);
    const id = postRes.body.id;

    const getRes = await request(app).get(`/api/haber/${id}`);
    expect(getRes.statusCode).toBe(200);
    expect(getRes.body.id).toBe(id);

    const putRes = await request(app)
      .put(`/api/haber/${id}`)
      .send({ title: 'Güncellenmiş Haber', content: 'Güncellenmiş içerik' });
    expect(putRes.statusCode).toBe(200);
    expect(putRes.body.title).toBe('Güncellenmiş Haber');

    const deleteRes = await request(app).delete(`/api/haber/${id}`);
    expect(deleteRes.statusCode).toBe(204);
  });

  it('GET /api/haber listelemeli', async () => {
    await prisma.haber.create({ data: { title: 'Haber 1', content: 'İçerik 1' } });
    await prisma.haber.create({ data: { title: 'Haber 2', content: 'İçerik 2' } });

    const res = await request(app).get('/api/haber');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThanOrEqual(2);
  });
});
