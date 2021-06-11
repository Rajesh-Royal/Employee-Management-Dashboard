import { Document } from 'mongoose';

export interface EmployeeType extends Document {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  ctc: number
}
