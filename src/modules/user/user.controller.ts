import {
  Controller,
  Body,
  Post,
  Put,
  Param,
  Get,
  Delete,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { UserResposeDto } from './dtos/user-response.dto';
import { CreateUserDto } from './dtos/create-user.dto';
import { ParamUserDTO } from './dtos/param-user.dto';
import { AuthGuard } from '../../core/guard/auth.guard';

@ApiTags('user')
@ApiBearerAuth()
@Controller('users')
export class UserController {
  @Get()
  @ApiOkResponse({
    description: 'Usuários do sistema',
    type: UserResposeDto,
    isArray: true,
  })
  async index(): Promise<UserResposeDto[]> {
    return [
      {
        id: 1,
        firstName: 'Fulado',
        lastName: 'Silva',
        email: 'fulano@email.com',
      },
      {
        id: 2,
        firstName: 'Beltrano',
        lastName: 'Pereira',
        email: 'b.pereira@email.com',
      },
    ];
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'Usuários do sistema',
    type: UserResposeDto,
  })
  @ApiNotFoundResponse({
    description: 'Usuário não encontrado',
  })
  async show(@Param() params: ParamUserDTO): Promise<UserResposeDto> {
    return {
      id: params.id,
      firstName: 'Fulado',
      lastName: 'Silva',
      email: 'fulano@email.com',
    };
  }

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
  @ApiUnauthorizedResponse({
    description: 'Acesso não autorizado',
  })
  @UseGuards(AuthGuard)
  async update(
    @Param() params: ParamUserDTO,
    @Body() createUserDto: CreateUserDto,
  ): Promise<UserResposeDto> {
    return {
      id: params.id,
      ...createUserDto,
    };
  }

  @Delete('remove/:id')
  @ApiNoContentResponse({
    description: 'Usuário excluído com sucesso',
  })
  @ApiNotFoundResponse({
    description: 'Usuário não encontrado',
  })
  @ApiUnauthorizedResponse({
    description: 'Acesso não autorizado',
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @UseGuards(AuthGuard)
  async delete(@Param() params: ParamUserDTO): Promise<void> {
    return null;
  }
}
