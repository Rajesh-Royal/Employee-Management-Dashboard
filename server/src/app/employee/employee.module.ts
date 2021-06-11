import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeRepositoryService } from './employee-repository.service';
import { EmployeeMutationService } from './employee.mutation.service';
import { EmployeeResolvers } from './employee.resolvers';
import { EmployeeSchema } from './employee.schema';

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
    EmployeeMutationService
  ],
  exports: [
    MongooseModule,
    EmployeeRepositoryService
  ]
})
export class EmployeeModule {}
