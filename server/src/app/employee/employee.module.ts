import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeRepositoryService } from './employee-repository.service';
import { EmployeeCreateMutationService } from './services/employee-create.mutation.service';
import { EmployeeResolvers } from './employee.resolvers';
import { EmployeeSchema } from './employee.schema';
import { EmployeeListReadQueryService } from './services/employee-list-read.query.service';
import { EmployeeReadQueryService } from './services/employee-read-query.service';

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
    EmployeeCreateMutationService,
    EmployeeListReadQueryService,
    EmployeeReadQueryService
  ],
  exports: [
    MongooseModule,
    EmployeeRepositoryService
  ]
})
export class EmployeeModule {}
