import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { EmployeeModule } from './employee/employee.module';
import { EmployeeResolvers } from './employee/employee.resolvers';


@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      playground: true,
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/employeeManagement', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    }),
    ScheduleModule.forRoot(),
    EmployeeModule
  ],

})
export class AppModule {}
