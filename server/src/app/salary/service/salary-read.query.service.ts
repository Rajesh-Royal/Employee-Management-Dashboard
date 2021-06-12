import { Injectable } from '@nestjs/common';

import { SalaryRepositoryService } from '../salary-repository.service';
import { EmployeeSalaryReadQueryModel } from './salary-read.query.model';


@Injectable()
export class EmployeeSalaryReadQueryService {

  constructor(private salaryRepositoryService: SalaryRepositoryService) {
  }

  public async serve(employeeId: string) {
    const data = await this.salaryRepositoryService.findSalary(employeeId)

    return new EmployeeSalaryReadQueryModel(data);
  }
}
