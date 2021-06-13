import * as mongoose from 'mongoose';

export const SalarySchema = new mongoose.Schema({
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'EmployeeType'
    },
    basic: Number,
    da: Number,
    pa: Number,
    hra: Number,
    pt: Number,
    epf: Number,
});
