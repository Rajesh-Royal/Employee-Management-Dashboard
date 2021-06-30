import { Injectable, Logger } from "@nestjs/common";
import { EmployeeSalariesRepositoryService } from "src/app/employee-salaries/employee-salaries-repository-service";
import { SalaryStructureRepositoryService } from "../salary-structure-repository.service";
import { DeleteSalaryStructureMutationModel } from "./delete-salary-structure-mutation.model";

@Injectable()
export class DeleteSalaryStructureMutationService {
    private Logger = new Logger("DeleteSalaryStructureMutationService");
    constructor(
        private salaryStructureRepositoryService: SalaryStructureRepositoryService,
        private employeeSalariesRepositoryService: EmployeeSalariesRepositoryService
    ){}

    public async serve(operation: DeleteSalaryStructureMutationModel) {
        const deleteSalaryFild = await this.salaryStructureRepositoryService.deleteSalaryField(operation);
        const deleteEmployeeSalary = await this.employeeSalariesRepositoryService.removeEmployeeSalary(operation.fieldId);
        console.log(deleteSalaryFild, deleteEmployeeSalary)
        if(deleteSalaryFild?.deletedCount > 0 && deleteEmployeeSalary?.nModified > 0){
            this.Logger.debug(`Salary Field Deleted :: DeleteCount is ${deleteSalaryFild?.deletedCount} :: Also updated EmployeeSalaries and count is ${deleteEmployeeSalary?.nModified}`);
            return true;
        }else{
            this.Logger.debug(`Salary Field Cannot be deleted :: DeleteCount is ${deleteSalaryFild?.deletedCount}`);
            return false;
        }

    }
}