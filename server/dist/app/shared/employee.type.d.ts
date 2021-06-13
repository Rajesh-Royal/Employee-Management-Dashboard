import { Document } from 'mongoose';
import { SalaryType } from './salary.type';
export interface EmployeeType extends Document {
    _id?: string;
    firstName: string;
    lastName: string;
    email: string;
    city: string;
    ctc: number;
    salary?: SalaryType;
}
