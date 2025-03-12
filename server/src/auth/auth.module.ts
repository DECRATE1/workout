import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';
import 'dotenv/config';
import { AuthServise } from './auth.servise';
import { AuthController } from './auth.controller';
@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: process.env.SECRET,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthServise],
  controllers: [AuthController],
  exports: [AuthServise],
})
export class AuthModule {}
