import { Injectable } from '@nestjs/common';
import { EmployeeRepositoryService } from '../employee-repository.service';
import { EmployeeType } from '../../shared/employee.type';
import { EmployeeReadQueryModel } from './employee-list-read-query.model';


@Injectable()
export class EmployeeReadQueryService {

  constructor(private employeeRepositoryService: EmployeeRepositoryService) {
  }

  public async serve(employeeId: string) {
    const data = await this.employeeRepositoryService.readAnEmployee(employeeId)

    return new EmployeeReadQueryModel(data);
  }
}
