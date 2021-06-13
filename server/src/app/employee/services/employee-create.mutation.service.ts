import { Injectable } from '@nestjs/common';
import { EmployeeRepositoryService } from '../employee-repository.service';
import { EmployeeCreateMutationModel } from './employee-create.mutation.model';
import { EmployeeType } from '../../shared/employee.type';


@Injectable()
export class EmployeeCreateMutationService {

  constructor(private employeeRepositoryService: EmployeeRepositoryService) {
  }

  public async serve(operation: EmployeeCreateMutationModel): Promise<EmployeeType> {
    console.log(operation)
    const data = await this.employeeRepositoryService.createEmployee(operation)
    console.log(data)
    return data;
  }
}
