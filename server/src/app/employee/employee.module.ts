import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeRepositoryService } from './employee-repository.service';
import { EmployeeMutationService } from './services/employee.mutation.service';
import { EmployeeResolvers } from './employee.resolvers';
import { EmployeeSchema } from './employee.schema';
import { EmployeeListReadQueryService } from './services/employee-list-read.query.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'EmployeeType',
        schema: EmployeeSchema,
        collection: "employee"
      },
    ]),
  ],
  providers: [
    EmployeeResolvers,
    EmployeeRepositoryService,
    EmployeeMutationService,
    EmployeeListReadQueryService
  ],
  exports: [
    MongooseModule,
    EmployeeRepositoryService
  ]
})
export class EmployeeModule {}
