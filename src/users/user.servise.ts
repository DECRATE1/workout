import { PrismaServise } from 'src/prisma/prisma.servise';
import { Injectable } from '@nestjs/common';
@Injectable()
export class UserServise {
  constructor(private prisma: PrismaServise) {}

  async createUser({
    username,
    email,
    password,
  }: {
    username: string;
    email: string;
    password: string;
  }) {
    return await this.prisma.user.create({
      data: {
        name: username,
        email,
        password,
      },
    });
  }
}
