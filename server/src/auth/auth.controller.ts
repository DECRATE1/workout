import { Body, Controller, Post } from '@nestjs/common';
import { AuthServise } from './auth.servise';
import { UserInterface } from 'src/interfaces/userInterface';

@Controller('auth')
export class AuthController {
  constructor(private authServise: AuthServise) {}

  @Post('SignIn')
  async signIn(@Body() body: UserInterface) {
    const { email, password } = body;
    return await this.authServise.signIn({ email, password });
  }
}
