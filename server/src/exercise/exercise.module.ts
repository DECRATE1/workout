import { Module } from '@nestjs/common';
import { PrismaModel } from 'src/prisma/prisma.module';

import { ExerciseController } from './exercise.controller';
import { ExerciseServise } from './exercise.servise';

@Module({
  imports: [PrismaModel],
  controllers: [ExerciseController],
  providers: [ExerciseServise],
})
export class ExerciseModule {}
