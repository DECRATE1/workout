import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Redirect,
} from '@nestjs/common';
import { AuthServise } from './auth.servise';
import { UserInterface } from 'src/interfaces/userInterface';

@Controller('auth')
export class AuthController {
  constructor(private authServise: AuthServise) {}
  @Redirect('http://localhost:3001/')
  @HttpCode(HttpStatus.OK)
  @Post('SignIn')
  async signIn(@Body() body: UserInterface) {
    const { email, password } = body;
    try {
      return await this.authServise.signIn({ email, password });
    } catch (err) {
      console.error(err);
    }
  }
}
