import { EmployeeType } from 'src/app/shared/employee.type';
import { SalaryType } from 'src/app/shared/salary.type';
export declare class EmployeeReadQueryModel {
    readonly _id?: string;
    readonly firstName: string;
    readonly lastName?: string;
    readonly email: string;
    readonly city?: string;
    readonly ctc: number;
    readonly salary?: SalaryType;
    constructor(initialValue?: EmployeeType);
}
