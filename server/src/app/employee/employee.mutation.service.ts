import { Injectable } from '@nestjs/common';
import { EmployeeRepositoryService } from './employee-repository.service';
import { EmployeeCreateMutationModel } from './employee.mutation.model';
import { EmployeeType } from '../shared/employee.type';


@Injectable()
export class EmployeeMutationService {

  constructor(private employeeRepositoryService: EmployeeRepositoryService) {
  }

  public async serve(operation: EmployeeCreateMutationModel): Promise<EmployeeType> {
    const data = await this.employeeRepositoryService.createEmployee(operation)
    return data;
  }
}
