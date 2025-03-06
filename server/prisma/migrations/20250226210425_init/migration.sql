/*
  Warnings:

  - You are about to drop the `Exercise` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Exercise";

-- CreateTable
CREATE TABLE "exercises" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "linkToVideo" TEXT,

    CONSTRAINT "exercises_pkey" PRIMARY KEY ("id")
);
