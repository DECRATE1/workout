import { PrismaServise } from 'src/prisma/prisma.servise';
import { Injectable } from '@nestjs/common';
import { UserInterface } from 'src/interfaces/userInterface';
@Injectable()
export class UserServise {
  constructor(private prisma: PrismaServise) {}

  async createUser({ name, email, password }: UserInterface) {
    try {
      if (name && email && password) {
        const response = await this.prisma.user.create({
          data: { name, email, password },
        });
        return response;
      }
    } catch (err) {
      console.log(Error((err as Error).message));
    }
    if (name && email && password)
      return await this.prisma.user.create({
        data: {
          name: name,
          email: email,
          password: password,
        },
      });
  }

  async findUser({ email }: UserInterface) {
    try {
      const response = await this.prisma.user.findFirst({ where: { email } });
      return response;
    } catch (err) {
      console.log(Error((err as Error).message));
    }
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
