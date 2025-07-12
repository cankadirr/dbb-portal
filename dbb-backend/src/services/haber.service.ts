import prisma from '../prismaClient';

interface HaberData {
  title: string;
  content: string;
}

export const getAll = async () => {
  return await prisma.haber.findMany();
};

export const getById = async (id: number) => {
  return await prisma.haber.findUnique({
    where: { id },
  });
};

export const create = async (data: HaberData) => {
  return await prisma.haber.create({ data });
};

export const update = async (id: number, data: HaberData) => {
  return await prisma.haber.update({
    where: { id },
    data,
  });
};

export const remove = async (id: number) => {
  return await prisma.haber.delete({
    where: { id },
  });
};
