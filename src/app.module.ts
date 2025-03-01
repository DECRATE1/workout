import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { WorkoutModule } from './workout/workout.module';

@Module({
  imports: [UserModule, WorkoutModule],
})
export class AppModule {}
