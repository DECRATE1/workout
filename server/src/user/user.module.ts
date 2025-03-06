import { Module } from '@nestjs/common';

import { UserController } from './user.controller';
import { UserServise } from './user.servise';
import { PrismaModel } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModel],
  providers: [UserServise],
  controllers: [UserController],
})
export class UserModule {}
