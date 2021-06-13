import { SalaryRepositoryService } from '../salary-repository.service';
import { EmployeeSalaryModel } from './salary.model';
export declare class EmployeeSalaryUpdateMutationService {
    private salaryRepositoryService;
    constructor(salaryRepositoryService: SalaryRepositoryService);
    serve(operation: EmployeeSalaryModel): Promise<boolean>;
}
