import { Model } from 'mongoose';
import { EmployeeCreateMutationModel } from './services/employee-create.mutation.model';
import { EmployeeType } from '../shared/employee.type';
import { SingleEmployeeReadQueryModel } from './services/employee-read-query.model';
export declare class EmployeeRepositoryService {
    private readonly EmployeeTypeModel;
    constructor(EmployeeTypeModel: Model<EmployeeType>);
    createEmployee(operation: EmployeeCreateMutationModel): Promise<EmployeeType>;
    getAllEmployees(): Promise<EmployeeType[]>;
    readAnEmployee(operation: SingleEmployeeReadQueryModel): Promise<EmployeeType>;
}
