import { Injectable } from '@nestjs/common';
import { EmployeeRepositoryService } from './employee-repository.service';
import { EmployeeCreateMutationModel } from './employee.mutation.model';
import { EmployeeType } from './employee.type';


@Injectable()
export class EmployeeMutationService {

  constructor(private employeeRepositoryService: EmployeeRepositoryService) {
  }

  public async serve(operation: EmployeeCreateMutationModel): Promise<EmployeeType> {
    const data = await this.employeeRepositoryService.createEmployee(operation.firstName, operation.lastName)
    console.log(data)

    return data;
  }
}
