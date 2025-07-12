import prisma from '../prismaClient';

interface IhaleData {
  title: string;
  description: string;
  date?: Date;
}

export const getAll = async () => {
  return await prisma.ihale.findMany();
};

export const getById = async (id: number) => {
  return await prisma.ihale.findUnique({
    where: { id },
  });
};

export const create = async (data: IhaleData) => {
  return await prisma.ihale.create({ data });
};

export const update = async (id: number, data: IhaleData) => {
  return await prisma.ihale.update({
    where: { id },
    data,
  });
};

export const remove = async (id: number) => {
  return await prisma.ihale.delete({
    where: { id },
  });
};
