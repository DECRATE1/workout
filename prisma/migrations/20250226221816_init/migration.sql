/*
  Warnings:

  - You are about to drop the column `authorId` on the `workouts` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "workouts" DROP CONSTRAINT "workouts_authorId_fkey";

-- DropIndex
DROP INDEX "workouts_authorId_key";

-- AlterTable
ALTER TABLE "workouts" DROP COLUMN "authorId";
