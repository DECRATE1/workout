import { Controller, Get } from '@nestjs/common';
import { ExerciseServise } from './exercise.servise';
@Controller('exercise')
export class ExerciseController {
  constructor(private exerciseServise: ExerciseServise) {}

  @Get('getExercises')
  async getExercises() {
    return this.exerciseServise.getExercises();
  }
}
