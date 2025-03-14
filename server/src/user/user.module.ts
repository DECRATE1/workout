import { Module } from '@nestjs/common';

import { UserController } from './user.controller';
import { UserServise } from './user.servise';
import { PrismaModel } from 'src/prisma/prisma.module';
import { PrismaServise } from 'src/prisma/prisma.servise';

@Module({
  imports: [PrismaModel],
  providers: [UserServise, PrismaServise],
  controllers: [UserController],
  exports: [UserServise],
})
export class UserModule {}
