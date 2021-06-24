import { Injectable } from "@nestjs/common";
import { EmployeeSalaryFieldsType } from "src/app/shared/employee-salary-fields.type";
import { EmployeeSalariesRepositoryService } from "../employee-salaries-repository-service";
import { ReadEmployeeSalaryQueryModel } from "./read-employee-salary-query.model";

@Injectable()
export class ReadEmployeeSalaryQueryService {
    constructor(
        private readonly employeeSalariesRepositoryService: EmployeeSalariesRepositoryService,
    ){}

    public async serve(operation: ReadEmployeeSalaryQueryModel): Promise<EmployeeSalaryFieldsType[]> {
        const result =  await this.employeeSalariesRepositoryService.readEmployeeSalary(operation);
        return result;
    }
}