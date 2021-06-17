import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

interface Paginated {
  page?: number;
  limit?: number;
  count?: number;
}

export type ClassType<T = any> = new (...args: any[]) => T;

export function PaginatedResponsetDto<T extends ClassType>(Entity: T): any {
  class Data extends Entity {}
  class Pagination implements Paginated {
    @ApiProperty()
    data: Data[];

    @ApiPropertyOptional({ default: 1, minimum: 1 })
    public page?: number;

    @ApiPropertyOptional({ default: 10 })
    public limit?: number;

    @ApiPropertyOptional({ default: 0, minimum: 0 })
    public count?: number;
  }

  return Pagination;
}
