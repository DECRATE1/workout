import { Injectable } from '@nestjs/common';
import { PrismaServise } from 'src/prisma/prisma.servise';
@Injectable()
export class WorkoutExerciseServise {
  constructor(private prisma: PrismaServise) {}

  async createWorkoutExercise({
    workoutId,
    exerciseId,
  }: {
    workoutId: number;
    exerciseId: number;
  }) {
    try {
      {
        const response = await this.prisma.workOutExercise.create({
          data: { workoutid: workoutId, exerciseid: exerciseId },
        });
        return response;
      }
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }

  async deleteWorkoutExercise({ id }: { id: number }) {
    try {
      await this.prisma.workOutExercise.delete({
        where: { id },
      });
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }

  async getWorkOutExercise({ id }: { id: number }) {
    const userId = +id;
    try {
      await this.prisma.workOutExercise.findMany({
        where: {
          workouts: {
            authorId: userId,
          },
        },
        include: {
          workouts: {
            select: {
              title: true,
            },
          },
        },
      });
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }
}
