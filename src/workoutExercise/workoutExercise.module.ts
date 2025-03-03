import { Module } from '@nestjs/common';

import { WorkoutExerciseController } from './workoutExercise.controller';
import { WorkoutExerciseServise } from './workoutExercise.servise';
import { PrismaModel } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModel],
  controllers: [WorkoutExerciseController],
  providers: [WorkoutExerciseServise],
})
export class WorkoutExerciseModule {}
