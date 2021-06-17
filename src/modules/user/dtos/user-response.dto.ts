import { PaginatedResponsetDto } from '../../../shared/dto/pagination-response.dto';

export class UserResposeDto {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export class UserResponsePaginatedDto extends PaginatedResponsetDto(
  UserResposeDto,
) {}
