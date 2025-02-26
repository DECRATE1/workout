/*
  Warnings:

  - Added the required column `authorId` to the `workouts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "workouts" ADD COLUMN     "authorId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "workouts" ADD CONSTRAINT "workouts_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
