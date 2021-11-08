import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users, UsersDocument } from 'src/schemas/users.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(Users.name) private userModel: Model<UsersDocument>) {}

  async findAll(): Promise<Users[]> {
    return this.userModel.find().exec();
  }

  async findOneByEmail(email: string): Promise<Users> {
    return this.userModel.findOne({ email: email }).exec();
  }
}
