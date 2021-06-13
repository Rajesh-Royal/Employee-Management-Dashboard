import { EmployeeType } from 'src/app/shared/employee.type';
export declare class EmployeeSalaryReadQueryModel {
    readonly _id?: string;
    readonly employee?: EmployeeType;
    readonly basic?: number;
    readonly da?: number;
    readonly pa?: number;
    readonly hra?: number;
    readonly pt?: number;
    readonly epf?: number;
    constructor(initialValue?: any);
}
