import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SalaryStructureRepositoryService } from './salary-structure-repository.service';
import { SalaryStructureResolver } from './salary-structure.resolver';
import { SalaryStructureSchema } from './salary-structure.schema';
import { CreateSalaryMetaKeyMutationService } from './service/create-salary-structure-mutation.service';
import { ReadSalaryMetaKeysQueryService } from './service/create-salary-structure-query.service';



@Module({
  imports: [
    MongooseModule.forFeature([
       {
        name: 'SalaryStructureType',
        schema: SalaryStructureSchema,
        collection: "SalaryStructure"
       }
    ]),
  ],
  providers: [
      SalaryStructureResolver,
      SalaryStructureRepositoryService,
      CreateSalaryMetaKeyMutationService,
      ReadSalaryMetaKeysQueryService
  ],
  exports: [
    MongooseModule,
    SalaryStructureRepositoryService
  ]
})
export class SalaryStructureModule {}
