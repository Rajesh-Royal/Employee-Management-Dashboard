import { Injectable } from '@nestjs/common';
import { EmployeeRepositoryService } from '../employee-repository.service';
import { EmployeeReadQueryModel } from './employee-list-read-query.model';
import { SingleEmployeeReadQueryModel } from './employee-read-query.model';


@Injectable()
export class EmployeeReadQueryService {

  constructor(private employeeRepositoryService: EmployeeRepositoryService) {
  }

  public async serve(operation: SingleEmployeeReadQueryModel) {
    const data = await this.employeeRepositoryService.readAnEmployee(operation)

    return new EmployeeReadQueryModel(data);
  }
}
