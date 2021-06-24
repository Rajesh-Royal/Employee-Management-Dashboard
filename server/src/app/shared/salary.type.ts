import { Document } from 'mongoose';

export interface SalaryType extends Document {
    _id?: string;
    employeeId: string,
    salary: SalaryType[]
}
