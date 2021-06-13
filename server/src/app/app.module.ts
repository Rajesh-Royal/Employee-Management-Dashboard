import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule } from '@nestjs/config';
import { EmployeeModule } from './employee/employee.module';
import { SalaryModule } from './salary/salary.module';
const productionMongoURI = "mongodb+srv://rajesh:rajesh@123@cluster0.iwlez.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const localMongoURI = "mongodb://localhost:27017/employeeManagement";
@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      playground: true,
    }),
    ConfigModule.forRoot({ envFilePath: `${process.env.NODE_ENV}.env` }),
    MongooseModule.forRoot(productionMongoURI , {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    }),
    ScheduleModule.forRoot(),
    EmployeeModule,
    SalaryModule
  ],

})
export class AppModule {}
