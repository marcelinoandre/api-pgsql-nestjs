import { UserEntity } from '../user.entity';

export class ReturnUserDto {
  user: UserEntity;
  message: string;
}
