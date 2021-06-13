import { EmployeeRepositoryService } from '../employee-repository.service';
import { EmployeeCreateMutationModel } from './employee-create.mutation.model';
import { EmployeeType } from '../../shared/employee.type';
export declare class EmployeeCreateMutationService {
    private employeeRepositoryService;
    constructor(employeeRepositoryService: EmployeeRepositoryService);
    serve(operation: EmployeeCreateMutationModel): Promise<EmployeeType>;
}
