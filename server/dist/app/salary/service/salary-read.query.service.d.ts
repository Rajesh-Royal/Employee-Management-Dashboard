import { SalaryRepositoryService } from '../salary-repository.service';
import { EmployeeSalaryReadQueryModel } from './salary-read.query.model';
export declare class EmployeeSalaryReadQueryService {
    private salaryRepositoryService;
    constructor(salaryRepositoryService: SalaryRepositoryService);
    serve(employeeId: string): Promise<EmployeeSalaryReadQueryModel>;
}
