import { Injectable } from '@nestjs/common';
import { EmployeeType } from 'src/app/shared/employee.type';

import { EmployeeRepositoryService } from '../employee-repository.service';


@Injectable()
export class EmployeeListReadQueryService {

    constructor(private employeeRepositoryService: EmployeeRepositoryService) {
    }

  public async serve(): Promise<EmployeeType[]> {
    const result = await this.employeeRepositoryService.getAllEmployees();
    return result;
  }
}
