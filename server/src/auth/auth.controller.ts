import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthServise } from './auth.servise';
import { UserInterface } from 'src/interfaces/userInterface';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authServise: AuthServise) {}

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

  @UseGuards(AuthGuard)
  @Get('userProfile/:id')
  async getUserProfile(@Param('id') id: number) {
    const userId = +id;
    try {
      return await this.authServise.getUserProfile({ id: userId });
    } catch (err) {
      console.error(err);
    }
  }
}
