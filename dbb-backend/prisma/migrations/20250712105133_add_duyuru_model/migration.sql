-- CreateTable
CREATE TABLE "Duyuru" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Duyuru_pkey" PRIMARY KEY ("id")
);
