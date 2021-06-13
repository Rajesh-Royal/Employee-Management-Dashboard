import { Model } from 'mongoose';
import { EmployeeType } from '../shared/employee.type';
import { SalaryType } from '../shared/salary.type';
import { EmployeeSalaryModel } from './service/salary.model';
export declare class SalaryRepositoryService {
    private readonly SalaryTypeModel;
    private readonly EmployeeTypeModel;
    private Logger;
    constructor(SalaryTypeModel: Model<SalaryType>, EmployeeTypeModel: Model<EmployeeType>);
    createSalary(operation: EmployeeSalaryModel): Promise<SalaryType>;
    findSalary(employeeId: string): Promise<SalaryType>;
    updateSalary(operation: EmployeeSalaryModel): Promise<any>;
    updateSalaryIdofEmployee(employeeId: any): Promise<any>;
}
