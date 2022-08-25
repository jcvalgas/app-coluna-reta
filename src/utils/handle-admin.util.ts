import { UnauthorizedException } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';

export function role(user: User) {
  if (!user.role) {
    throw new UnauthorizedException('Admins only!');
  }
}
