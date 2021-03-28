import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserEntity } from '../users/user.entity';
import { CreateUserDto } from '../users/dtos/create-user.dto';
import { AuthService } from './auth.service';
import { LoginDto } from './login.dto';
import { GetUser } from './user.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  async signUp(
    @Body(ValidationPipe) createUserDto: CreateUserDto,
  ): Promise<{ message: string }> {
    await this.authService.signUp(createUserDto);
    return {
      message: 'Cadastro realizado com sucesso',
    };
  }

  @Post('/signin')
  async signIn(
    @Body(ValidationPipe) loginDto: LoginDto,
  ): Promise<{ token: string }> {
    return await this.authService.signIn(loginDto);
  }

  @Get('/me')
  @UseGuards(AuthGuard())
  getMe(@GetUser() user: UserEntity): UserEntity {
    return user;
  }
}
