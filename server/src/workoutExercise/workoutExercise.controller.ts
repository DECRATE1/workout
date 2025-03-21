import {
  Body,
  Controller,
  Get,
  HttpCode,
  NotAcceptableException,
  Param,
  Post,
} from '@nestjs/common';
import { WorkoutExerciseInterface } from 'src/interfaces/workoutExerciseInterface';
import { WorkoutExerciseServise } from './workoutExercise.servise';

@Controller('workoutExercise')
export class WorkoutExerciseController {
  constructor(private workoutExerciseServise: WorkoutExerciseServise) {}
  @HttpCode(201)
  @Post('createWorkoutExercise')
  async createWorkoutExercise(@Body() body: WorkoutExerciseInterface) {
    const { workoutId, exerciseId } = body;
    try {
      if (workoutId && exerciseId) {
        const response =
          await this.workoutExerciseServise.createWorkoutExercise({
            workoutId,
            exerciseId,
          });
        return response;
      }
    } catch (err) {
      throw new NotAcceptableException(err);
    }
  }

  @HttpCode(201)
  @Get('getWorkoutExerciseById/:id')
  async getWorkoutExerciseById(@Param('id') id: number) {
    const workoutExerciseId = +id;
    try {
      if (workoutExerciseId) {
        const response =
          await this.workoutExerciseServise.getWorkoutExerciseById({
            id: workoutExerciseId,
          });
        return response;
      }
    } catch (err) {
      throw new NotAcceptableException(err);
    }
  }

  @Get('getWorkoutExerciseByUserId/:id')
  async getWorkoutExerciseByUserId(@Param('id') id: number) {
    const userId = +id;
    try {
      if (userId) {
        return await this.workoutExerciseServise.getWorkoutExerciseByUserId({
          id: userId,
        });
      }
    } catch (err) {
      throw new NotAcceptableException(err);
    }
  }
}
