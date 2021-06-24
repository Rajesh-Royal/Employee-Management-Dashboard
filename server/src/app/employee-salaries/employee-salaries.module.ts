import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { EmployeeSalariesRepositoryService } from "./employee-salaries-repository-service";
import { EmployeeSalariesResolver } from "./employee-salaries.resolver";
import { EmployeeSalarySchema } from "./employee-salaries.schema";
import { EmployeeSalaryCreateMutationService } from "./service/create-employee-salary-mutation.service";
import { ReadEmployeeSalaryQueryService } from "./service/read-employee-salary-query.service";
import { UpdateEmployeeSalaryMutationService } from "./service/update-employee-salary-mutation.service";

@Module({
    imports: [
      MongooseModule.forFeature([
        {
            name: "EmployeeSalaries",
            schema: EmployeeSalarySchema,
            collection: "EmployeeSalaries"
        },
      ]),
    ],
    providers: [
      EmployeeSalariesRepositoryService,
      EmployeeSalaryCreateMutationService,
      UpdateEmployeeSalaryMutationService,
      ReadEmployeeSalaryQueryService,
      EmployeeSalariesResolver
    ],
    exports: [
      MongooseModule,
      EmployeeSalariesRepositoryService
    ]
  })

export class EmployeeSalariesModule {}