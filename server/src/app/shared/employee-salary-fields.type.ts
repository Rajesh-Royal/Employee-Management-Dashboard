import { Document } from 'mongoose';

export interface EmployeeSalaryFieldsType extends Document {
    _id?: string;
    employeeId: string,
    salary: SalaryType[]
}

export interface SalaryType {
    meta_key: string,
    value: number,
    meta_field_id: string,
    type: string,
}