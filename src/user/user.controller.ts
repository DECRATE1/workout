import { Body, Controller, NotAcceptableException, Post } from '@nestjs/common';
import { UserServise } from './user.servise';
import { UserInterface } from 'src/interfaces/userInterface';

@Controller('user')
export class UserController {
  constructor(private userServise: UserServise) {}

  @Post('create')
  async createUser(@Body() body: UserInterface) {
    const { name, email, password } = body;
    try {
      if (name && email && password) {
        const response = await this.userServise.createUser({
          username: name,
          email,
          password,
        });
        return response;
      }
      return new Error('Data is not valid');
    } catch (err) {
      throw new NotAcceptableException(err);
    }
  }
}
