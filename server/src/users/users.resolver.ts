import { Args, Query, Resolver } from '@nestjs/graphql';
import { Users } from './users.model';
import { UsersService } from './users.service';

@Resolver((of) => Users)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query((returns) => [Users])
  async getAllUsers() {
    return this.usersService.findAll();
  }

  @Query((returns) => Users)
  async getUserByEmail(@Args('email') email: string) {
    return this.usersService.findOneByEmail(email);
  }
}
