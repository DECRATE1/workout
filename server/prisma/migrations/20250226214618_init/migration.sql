/*
  Warnings:

  - You are about to drop the `WorkOut` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "WorkOut" DROP CONSTRAINT "WorkOut_authorId_fkey";

-- DropTable
DROP TABLE "WorkOut";

-- CreateTable
CREATE TABLE "workouts" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "workouts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "workouts_authorId_key" ON "workouts"("authorId");

-- AddForeignKey
ALTER TABLE "workouts" ADD CONSTRAINT "workouts_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
