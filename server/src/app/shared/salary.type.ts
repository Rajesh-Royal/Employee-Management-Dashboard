import { Document } from 'mongoose';

export interface SalaryType extends Document {
    _id?: string;
    employeeId: string,
    da: number,
    pa: number,
    hra: number,
    pt: number,
    epf: number,
}
