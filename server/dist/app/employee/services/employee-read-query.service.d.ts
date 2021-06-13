import { EmployeeRepositoryService } from '../employee-repository.service';
import { EmployeeReadQueryModel } from './employee-list-read-query.model';
import { SingleEmployeeReadQueryModel } from './employee-read-query.model';
export declare class EmployeeReadQueryService {
    private employeeRepositoryService;
    constructor(employeeRepositoryService: EmployeeRepositoryService);
    serve(operation: SingleEmployeeReadQueryModel): Promise<EmployeeReadQueryModel>;
}
