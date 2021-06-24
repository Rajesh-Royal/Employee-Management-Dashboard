import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeSalariesModule } from '../employee-salaries/employee-salaries.module';
import { SalaryStructureModule } from '../salary/salary-structure/salary-structure.module';
import { EmployeeRepositoryService } from './employee-repository.service';
import { EmployeeResolvers } from './employee.resolvers';
import { EmployeeSchema } from './employee.schema';
import { EmployeeCreateMutationService } from './services/employee-create.mutation.service';
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
    forwardRef(() => EmployeeSalariesModule),
    forwardRef(() => SalaryStructureModule)
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
