import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { WorkoutModule } from './workout/workout.module';
import { WorkoutExerciseModule } from './workoutExercise/workoutExercise.module';
import { AuthModule } from './auth/auth.module';
import { ExerciseModule } from './exercise/exercise.module';
@Module({
  imports: [
    AuthModule,
    UserModule,
    WorkoutModule,
    ExerciseModule,
    WorkoutExerciseModule,
  ],
})
export class AppModule {}
