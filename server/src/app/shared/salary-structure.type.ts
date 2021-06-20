import { Document } from 'mongoose';

export interface SalaryStructureType extends Document {
    _id?: string;
    salary_meta_key: string,
    field_name: string,
    type: string,
    disabled: boolean,
}
