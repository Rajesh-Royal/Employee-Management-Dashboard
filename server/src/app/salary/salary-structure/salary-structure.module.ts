import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeSalariesModule } from 'src/app/employee-salaries/employee-salaries.module';
import { SalaryStructureRepositoryService } from './salary-structure-repository.service';
import { SalaryStructureResolver } from './salary-structure.resolver';
import { SalaryStructureSchema } from './salary-structure.schema';
import { CreateSalaryMetaKeyMutationService } from './service/create-salary-structure-mutation.service';
import { ReadSalaryMetaKeysQueryService } from './service/create-salary-structure-query.service';
import { DeleteSalaryStructureMutationService } from './service/delete-salary-structure-mutation-service';



@Module({
  imports: [
    MongooseModule.forFeature([
       {
        name: 'SalaryStructureType',
        schema: SalaryStructureSchema,
        collection: "SalaryStructure"
       }
    ]),
    forwardRef(() => EmployeeSalariesModule)
  ],
  providers: [
      SalaryStructureResolver,
      SalaryStructureRepositoryService,
      CreateSalaryMetaKeyMutationService,
      ReadSalaryMetaKeysQueryService,
      DeleteSalaryStructureMutationService
  ],
  exports: [
    MongooseModule,
    SalaryStructureRepositoryService
  ]
})
export class SalaryStructureModule {}
