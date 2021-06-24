import { Injectable, Logger } from "@nestjs/common";
import { EmployeeSalariesRepositoryService } from "src/app/employee-salaries/employee-salaries-repository-service";
import { SalaryStructureType } from "src/app/shared/salary-structure.type";
import { SalaryStructureModel } from "../salary-structure-model";
import { SalaryStructureRepositoryService } from "../salary-structure-repository.service";
import { CreateSalaryMetaKeyMutationModel } from "./create-salary-structure-mutation.model";

@Injectable()
export class CreateSalaryMetaKeyMutationService {
    private Logger = new Logger();

    constructor(
        private readonly salaryStructureRepositoryService: SalaryStructureRepositoryService,
        private readonly employeeSalariesRepositoryService: EmployeeSalariesRepositoryService,
    ){
    }

    // ToDo: why the return type is giving error when using only SalaryStructureType
    public async serve(operation: SalaryStructureModel): Promise<SalaryStructureType | any> {
        const createSalaryMetaKey = await this.salaryStructureRepositoryService.createSalaryField(operation).then(async (salaryField: SalaryStructureType) => {
            // update employees salaries when a new salary Field is created.
            // It will add that new salary field with value 0 to all the salaries of employee.
            await this.employeeSalariesRepositoryService.addEmployeeSalaryField(salaryField).then((data) => {
                this.Logger.log(`Employee Salaries updated with new salary Field ${operation.salary_meta_key}`);
            })
            return salaryField;
        })

        if(createSalaryMetaKey?._id){
            return new CreateSalaryMetaKeyMutationModel(createSalaryMetaKey);
        }else{
            return "Cannot Create Salary Meta Key Field";
        }
    }
}