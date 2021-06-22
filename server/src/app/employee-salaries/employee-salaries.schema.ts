import * as mongoose from "mongoose";

export const EmployeeSalarySchema = new mongoose.Schema({
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "EmployeeType"
    },
    salary: [{
        meta_key: String,
        value: Number,
        type: String,
        meta_field_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SalaryStructureType"
        }
    }]
}, {timestamps: true});