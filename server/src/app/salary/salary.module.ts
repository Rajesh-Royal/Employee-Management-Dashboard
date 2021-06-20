import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeModule } from '../employee/employee.module';
import { SalaryRepositoryService } from './salary-repository.service';
import { SalaryStructureModule } from './salary-structure/salary-structure.module';
import { SalaryResolvers } from './salary.resolver';
import { SalarySchema } from './salary.schema';
import { EmployeeSalaryReadQueryService } from './service/salary-read.query.service';
import { EmployeeSalaryUpdateMutationService } from './service/salary-update.mutation.service';


@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'SalaryType',
        schema: SalarySchema,
        collection: "salary"
      },
    ]),
    forwardRef(() => EmployeeModule),
    forwardRef(() => SalaryStructureModule)
  ],
  providers: [
    SalaryResolvers,
    SalaryRepositoryService,
    EmployeeSalaryUpdateMutationService,
    EmployeeSalaryReadQueryService
  ],
  exports: [
    MongooseModule,
    SalaryRepositoryService,
  ]
})
export class SalaryModule {}
