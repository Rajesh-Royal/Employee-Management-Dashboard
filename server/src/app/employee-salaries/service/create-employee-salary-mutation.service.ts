import { Injectable } from '@nestjs/common';
import { EmployeeSalariesRepositoryService } from '../employee-salaries-repository-service';
import { EmployeeSalaryCreateMutationModel } from './create-employee-salary-mutation.model';


@Injectable()
export class EmployeeSalaryCreateMutationService {

  constructor(
      private readonly employeeSalariesRepositoryService: EmployeeSalariesRepositoryService
  ) {
  }

  public async serve(operation: EmployeeSalaryCreateMutationModel) {
    console.log("reach here")
    const employeeSalary = await this.employeeSalariesRepositoryService.createEmployeeSalary(operation)

    return employeeSalary;
  }
}
