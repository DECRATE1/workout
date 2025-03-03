import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { WorkoutModule } from './workout/workout.module';
import { WorkoutExerciseModule } from './workoutExercise/workoutExercise.module';

@Module({
  imports: [UserModule, WorkoutModule, WorkoutExerciseModule],
})
export class AppModule {}
