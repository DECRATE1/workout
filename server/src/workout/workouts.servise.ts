import { Injectable } from '@nestjs/common';
import { PrismaServise } from 'src/prisma/prisma.servise';

@Injectable()
export class WorkoutServise {
  constructor(private prisma: PrismaServise) {}

  async createWorkout({
    title,
    description,
    authorid,
  }: {
    title: string;
    description: string;
    authorid: number;
  }) {
    try {
      const response = await this.prisma.workOut.create({
        data: { title, description, authorid },
      });
      return response;
    } catch (err) {
      console.error(Error((err as Error).message));
    }
  }

  async deleteWorkout({ id }: { id: number }) {
    try {
      const response = await this.prisma.workOut.delete({ where: { id } });
      return response;
    } catch (err) {
      console.error(Error((err as Error).message));
    }
  }

  async updateWorkout({
    id,
    title,
    description,
  }: {
    id: number;
    title?: string;
    description?: string;
  }) {
    const update = { title, description };
    try {
      const response = await this.prisma.workOut.update({
        where: { id },
        data: update,
      });
      return response;
    } catch (err) {
      console.error(Error((err as Error).message));
    }
  }

  async getWorkoutByAuthorId({ id }: { id: number }) {
    const authorId = +id;
    try {
      const response = await this.prisma.workOut.findFirst({
        where: { authorid: authorId },
      });
      return response;
    } catch (err) {
      console.error(err);
    }
  }
}
