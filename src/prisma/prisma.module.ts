import { Module } from '@nestjs/common';
import { PrismaServise } from './prisma.servise';

@Module({
  providers: [PrismaServise],
  exports: [PrismaServise],
})
export class PrismaModel {}
