import { ObjectType, ID, Field } from '@nestjs/graphql';

@ObjectType()
export class Users {
  @Field((type) => ID)
  id: string;

  @Field()
  email: string;
}
