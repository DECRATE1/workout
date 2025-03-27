import {
  Injectable,
  NotAcceptableException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserInterface } from 'src/interfaces/userInterface';
import { UserServise } from 'src/user/user.servise';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthServise {
  constructor(
    private userServise: UserServise,
    private jwtServise: JwtService,
  ) {}

  async signIn({
    email,
    password,
  }: UserInterface): Promise<{ access_token: string }> {
    const user = await this.userServise.findUser({ email });
    if (!user) {
      throw new NotAcceptableException();
    }
    const isVerified = await bcrypt.compare(password as string, user.password);
    if (!isVerified) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user?.id, email: user?.email };
    return {
      access_token: await this.jwtServise.signAsync(payload),
    };
  }
}
