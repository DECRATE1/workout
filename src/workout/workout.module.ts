import { Module } from '@nestjs/common';
import { workoutController } from './workouts.controller';
import { PrismaModel } from 'src/prisma/prisma.module';
import { WorkoutServise } from './workouts.servise';

@Module({
  imports: [PrismaModel],
  controllers: [workoutController],
  providers: [WorkoutServise],
})
export class WorkoutModule {}
