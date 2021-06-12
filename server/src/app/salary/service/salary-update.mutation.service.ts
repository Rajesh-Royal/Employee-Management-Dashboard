import { Injectable } from '@nestjs/common';

import { SalaryRepositoryService } from '../salary-repository.service';
import { EmployeeSalaryModel } from './salary.model';


@Injectable()
export class EmployeeSalaryUpdateMutationService {

  constructor(private salaryRepositoryService: SalaryRepositoryService) {
  }

  public async serve(operation: EmployeeSalaryModel) {
    const data = await this.salaryRepositoryService.updateSalary(operation)

    if(data?.nModified || data.upserted){
      return true;
    }else{
      return false;
    }
  }
}
