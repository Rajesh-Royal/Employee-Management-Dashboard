import * as mongoose from 'mongoose';

export const EmployeeSchema = new mongoose.Schema({
    firstName: String,
    lastName: String
});
