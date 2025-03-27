import { PrismaServise } from 'src/prisma/prisma.servise';
import { Injectable } from '@nestjs/common';
import { UserInterface } from 'src/interfaces/userInterface';
@Injectable()
export class UserServise {
  constructor(private prisma: PrismaServise) {}

  async createUser({ name, email, password }: UserInterface) {
    try {
      if (name && email && password) {
        return await this.prisma.user.create({
          data: { name, email, password },
        });
      }
    } catch (err) {
      console.error(err);
    }
  }

  async findUser({ email }: UserInterface) {
    return await this.prisma.user.findFirst({ where: { email } });
  }

  async findUserById({ id }: UserInterface) {
    try {
      const response = await this.prisma.user.findUnique({ where: { id } });
      return response;
    } catch (err) {
      console.log(Error((err as Error).message));
    }
  }

  async deleteUserById({ id }: UserInterface) {
    try {
      const response = await this.prisma.user.delete({ where: { id } });
      return response;
    } catch (err) {
      console.log(Error((err as Error).message));
    }
  }

  async changeUserName({ id, name }: UserInterface) {
    try {
      const response = await this.prisma.user.update({
        where: { id },
        data: { name },
      });
      return response;
    } catch (err) {
      console.log(Error((err as Error).message));
    }
  }

  async changePassword({ email, password }: UserInterface) {
    try {
      const response = await this.prisma.user.update({
        where: { email },
        data: { password },
      });
      return response;
    } catch (err) {
      console.log(Error((err as Error).message));
    }
  }
}
