/*
  Warnings:

  - You are about to drop the column `exerciseId` on the `workout_exercise` table. All the data in the column will be lost.
  - You are about to drop the column `workoutId` on the `workout_exercise` table. All the data in the column will be lost.
  - Added the required column `exerciseid` to the `workout_exercise` table without a default value. This is not possible if the table is not empty.
  - Added the required column `workoutid` to the `workout_exercise` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "workout_exercise" DROP CONSTRAINT "workout_exercise_exerciseId_fkey";

-- DropForeignKey
ALTER TABLE "workout_exercise" DROP CONSTRAINT "workout_exercise_workoutId_fkey";

-- AlterTable
ALTER TABLE "workout_exercise" DROP COLUMN "exerciseId",
DROP COLUMN "workoutId",
ADD COLUMN     "exerciseid" INTEGER NOT NULL,
ADD COLUMN     "workoutid" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "workout_exercise" ADD CONSTRAINT "workout_exercise_exerciseid_fkey" FOREIGN KEY ("exerciseid") REFERENCES "exercises"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "workout_exercise" ADD CONSTRAINT "workout_exercise_workoutid_fkey" FOREIGN KEY ("workoutid") REFERENCES "workouts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
