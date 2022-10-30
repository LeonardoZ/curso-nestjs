import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Patch,
  Post,
  Query,
  Session,
  UseGuards,
} from '@nestjs/common';
import { CurrentUser } from '../users/decorators/current-user.decorator';
import { Serialize } from '../interceptors/serialize.interceptor';
import { AuthService } from './auth.service';

import { CreateUserDTO } from './dtos/create-user.dto';
import { UpdateUserDTO } from './dtos/update-user.dto';
import { UserDto } from './dtos/user.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { AuthGuard } from '../guards/auth.guard';

@Controller('auth')
@Serialize(UserDto)
export class UsersController {
  constructor(
    private userService: UsersService,
    private authService: AuthService,
  ) {}

  @Post('/signup')
  async createUser(@Body() body: CreateUserDTO) {
    const user = await this.authService.signup(body.email, body.password);
    return user;
  }

  @Post('/signin')
  @HttpCode(200)
  async signIn(@Body() body: CreateUserDTO, @Session() session: any) {
    const user = await this.authService.signin(body.email, body.password);
    session.userId = user.id;
    console.log(session.userId);

    return user;
  }

  @Post('/signout')
  @HttpCode(200)
  async signOut(@Body() body: CreateUserDTO, @Session() session: any) {
    session.userId = null;
    return null;
  }

  @Patch('/:id')
  updateUser(@Param('id') id: number, @Body() body: UpdateUserDTO) {
    return this.userService.update(id, body);
  }

  @Get('/whoami')
  @UseGuards(AuthGuard)
  whoAmI(@CurrentUser() user: User) {
    return user;
  }

  @Get('/:id')
  async findUser(@Param('id') id: number) {
    const user = await this.userService.findOne(id);
    if (!id) {
      throw new NotFoundException('No user found');
    }
    return user;
  }

  @Serialize(UserDto)
  @Get('/')
  findAllUsers(@Query('email') email: string) {
    return this.userService.find(email);
  }

  @Delete('/:id')
  deleteUser(@Param('id') id: number) {
    return this.userService.remove(id);
  }
}
