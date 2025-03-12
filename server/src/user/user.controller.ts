import {
  Body,
  Controller,
  HttpCode,
  NotAcceptableException,
  Post,
  Redirect,
} from '@nestjs/common';
import { UserServise } from './user.servise';
import { UserInterface } from 'src/interfaces/userInterface';

@Controller('user')
export class UserController {
  constructor(private userServise: UserServise) {}

  @HttpCode(201)
  @Post('create')
  @Redirect('http://localhost:3001/signIn', 301)
  async createUser(@Body() body: UserInterface) {
    const { name, email, password } = body;
    const userIsExist = await this.userServise.findUser({ email });
    try {
      if (name && email && password && !userIsExist) {
        const response = await this.userServise.createUser({
          name,
          email,
          password,
        });
        if (response) {
          return response;
        }
        return new Error('Error');
      }
      return new Error('Data is not valid or user alredy exist');
    } catch (err) {
      throw new NotAcceptableException(err);
    }
  }
}
