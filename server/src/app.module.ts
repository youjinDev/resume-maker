import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/resumemaker'),
    GraphQLModule.forRoot({
      autoSchemaFile: true, //join(process.cwd(), 'src/schema.gql'),
      cors: {
        origin: 'http://localhost:3000',
        credentials: true,
      },
    }),
    UsersModule,
  ],
  //controllers: [AppController],
  //providers: [AppService],
})
export class AppModule {}
