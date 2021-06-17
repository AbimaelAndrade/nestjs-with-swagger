import { Controller, Body, Post, Put, Param } from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UserResposeDto } from './dtos/user-response.dto';
import { CreateUserDto } from './dtos/create-user.dto';

@ApiTags('user')
@Controller('users')
export class UserController {
  @Post('create')
  @ApiCreatedResponse({
    description: 'Usuário criado com sucesso',
    type: UserResposeDto,
  })
  async create(@Body() createUserDto: CreateUserDto): Promise<UserResposeDto> {
    return {
      id: 1,
      ...createUserDto,
    };
  }

  @Put('update/:id')
  @ApiOkResponse({
    description: 'Usuário atualizado com sucesso',
    type: UserResposeDto,
  })
  @ApiNotFoundResponse({
    description: 'Usuário não encontrado',
  })
  async update(
    @Param() userId: number,
    @Body() createUserDto: CreateUserDto,
  ): Promise<UserResposeDto> {
    return {
      id: userId,
      ...createUserDto,
    };
  }
}
