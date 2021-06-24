import { Injectable, Logger } from "@nestjs/common";
import { EmployeeSalariesRepositoryService } from "../employee-salaries-repository-service";
import { EmployeeSalaryCreateMutationModel } from "./create-employee-salary-mutation.model";

@Injectable()
export class UpdateEmployeeSalaryMutationService {
    private Logger = new Logger("UpdateEmployeeSalaryMutationService");
    constructor(
        private employeeSalariesRepositoryService: EmployeeSalariesRepositoryService,
    ){}

    public async serve(operation: EmployeeSalaryCreateMutationModel): Promise<boolean> {
        const updateSalary = await this.employeeSalariesRepositoryService.updateEmployeeSalary(operation);
        this.Logger.log(`Salary of employee :: ${operation.employeeId} :: is updated.`)
        if(updateSalary.nModified > 0){
            return true;
        }else {
            return false;
        }
    }
}