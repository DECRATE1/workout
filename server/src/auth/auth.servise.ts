import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserInterface } from 'src/interfaces/userInterface';
import { UserServise } from 'src/user/user.servise';

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
    if (user?.password === password) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user?.id, email: user?.email };
    return {
      access_token: await this.jwtServise.signAsync(payload),
    };
  }

  async getUserProfile({ id }: UserInterface) {
    const user = await this.userServise.findUserById({ id });
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
