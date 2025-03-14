import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';
import 'dotenv/config';
import { AuthServise } from './auth.servise';
import { AuthController } from './auth.controller';
import { UserServise } from 'src/user/user.servise';
import { PrismaServise } from 'src/prisma/prisma.servise';
@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: process.env.SECRET,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthServise, UserServise, PrismaServise],
  controllers: [AuthController],
  exports: [AuthServise],
})
export class AuthModule {}
