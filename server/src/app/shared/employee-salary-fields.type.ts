import { Document } from 'mongoose';

export interface EmployeeSalaryFieldsType extends Document {
    _id?: string;
    employeeId: string,
    meta_key: string,
    value: number,
    meta_field_id: string
}
