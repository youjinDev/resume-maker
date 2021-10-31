import { Module } from '@nestjs/common';
import { Users, UsersSchema } from 'src/schemas/users.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Users.name, schema: UsersSchema }])],
  providers: [UsersService],
})
export class UsersModule {}
