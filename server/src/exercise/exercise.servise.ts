import { Injectable, NotAcceptableException } from '@nestjs/common';
import { PrismaServise } from 'src/prisma/prisma.servise';
@Injectable()
export class ExerciseServise {
  constructor(private prismaServise: PrismaServise) {}

  async getExercises() {
    const response = await this.prismaServise.exercise.findMany();
    if (response) {
      return response;
    }
    throw new NotAcceptableException();
  }
}
