import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppResolvers } from './app.resolvers';
import { AppService } from './app.service';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      playground: true,
    })
  ],
  controllers: [AppController],
  providers: [
    AppService,
    AppResolvers
  ],
})
export class AppModule {}
