/*
  Warnings:

  - You are about to drop the column `authorId` on the `workouts` table. All the data in the column will be lost.
  - Added the required column `authorid` to the `workouts` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "workouts" DROP CONSTRAINT "workouts_authorId_fkey";

-- AlterTable
ALTER TABLE "workouts" DROP COLUMN "authorId",
ADD COLUMN     "authorid" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "workouts" ADD CONSTRAINT "workouts_authorid_fkey" FOREIGN KEY ("authorid") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
