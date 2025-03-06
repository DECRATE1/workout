import {
  Body,
  Controller,
  HttpCode,
  NotAcceptableException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { WorkoutServise } from './workouts.servise';
import { WorkoutInterface } from 'src/interfaces/workoutInterface';

@Controller('workout')
export class workoutController {
  constructor(private workoutServise: WorkoutServise) {}

  @HttpCode(201)
  @Post('create')
  async createWorkout(@Body() body: WorkoutInterface) {
    const { title, description, authorId } = body;
    if (title && description && authorId) {
      try {
        await this.workoutServise.createWorkout({
          title,
          description,
          authorId,
        });
      } catch (err) {
        return new NotAcceptableException(err);
      }
    }
  }

  @HttpCode(201)
  @Patch('update/:id')
  async updateWorkout(@Body() body: WorkoutInterface, @Param('id') id: number) {
    const { title, description } = body;
    const workoutId = +id;
    try {
      await this.workoutServise.updateWorkout({
        id: workoutId,
        title,
        description,
      });
    } catch (err) {
      return new NotAcceptableException(err);
    }
  }
}
