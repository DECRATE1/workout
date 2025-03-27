import {
  BadRequestException,
  Body,
  ConflictException,
  Controller,
  Get,
  NotAcceptableException,
  NotFoundException,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UserServise } from './user.servise';
import { UserInterface } from 'src/interfaces/userInterface';
import * as bcrypt from 'bcrypt';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('user')
export class UserController {
  constructor(private userServise: UserServise) {}

  @Post('create')
  async createUser(@Body() body: UserInterface) {
    const { name, email, password } = body;
    const userIsExist = await this.userServise.findUser({ email });

    if (userIsExist) {
      throw new ConflictException('User already exist');
    }

    if (name && email && password) {
      const hash = await bcrypt.hash(password, 10);
      return await this.userServise.createUser({
        name,
        email,
        password: hash,
      });
    }
    throw new BadRequestException('Invalid value');
  }
  @UseGuards(AuthGuard)
  @Get('getUser/:id')
  async getUser(@Param('id') id: number) {
    const userId = +id;
    try {
      const user = await this.userServise.findUserById({ id: userId });
      if (user) {
        return user;
      }
      return new NotFoundException('User not found');
    } catch (err) {
      return new NotAcceptableException(err);
    }
  }
}
