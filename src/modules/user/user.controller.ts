import { Controller, Body, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserResposeDto } from './dtos/create-user-response.dto';
import { CreateUserDto } from './dtos/create-user.dto';

@ApiTags('user')
@Controller('users')
export class UserController {
  @Post('create')
  @ApiCreatedResponse({
    description: 'Usuário criado com sucesso',
    type: CreateUserResposeDto,
  })
  async create(
    @Body() createUserDto: CreateUserDto,
  ): Promise<CreateUserResposeDto> {
    return {
      id: 1,
      firstName: 'Fulano',
      lastName: 'Silva',
      email: 'fulano.silva@email.com',
    };
  }
}
