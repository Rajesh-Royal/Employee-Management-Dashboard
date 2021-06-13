import { EmployeeType } from 'src/app/shared/employee.type';
import { EmployeeRepositoryService } from '../employee-repository.service';
export declare class EmployeeListReadQueryService {
    private employeeRepositoryService;
    constructor(employeeRepositoryService: EmployeeRepositoryService);
    serve(): Promise<EmployeeType[]>;
}
