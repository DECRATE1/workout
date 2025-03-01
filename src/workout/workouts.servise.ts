import { Injectable } from '@nestjs/common';
import { PrismaServise } from 'src/prisma/prisma.servise';

@Injectable()
export class WorkoutServise {
  constructor(private prisma: PrismaServise) {}

  async createWorkout({
    title,
    description,
    authorId,
  }: {
    title: string;
    description: string;
    authorId: number;
  }) {
    try {
      const response = await this.prisma.workOut.create({
        data: { title, description, authorId },
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
}
