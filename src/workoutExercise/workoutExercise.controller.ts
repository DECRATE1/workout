import {
  Body,
  Controller,
  HttpCode,
  NotAcceptableException,
  Post,
} from '@nestjs/common';
import { WorkoutExerciseInterface } from 'src/interfaces/workoutExerciseInterface';
import { WorkoutExerciseServise } from './workoutExercise.servise';

@Controller('workoutExercise')
export class WorkoutExerciseController {
  constructor(private workoutExerciseServise: WorkoutExerciseServise) {}
  @HttpCode(201)
  @Post('crateWorkoutExercise')
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
}
