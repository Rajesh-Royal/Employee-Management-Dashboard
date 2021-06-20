import { Document } from 'mongoose';

export interface AuthModuleType extends Document {
    _id?: string;
    username: string,
    email: string,
    mobile: number,
    password: string,
    salt?: string
}
