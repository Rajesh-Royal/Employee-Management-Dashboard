import * as mongoose from "mongoose";

export const EmployeeSalarySchema = new mongoose.Schema({
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "EmployeeType"
    },
    meta_key: String,
    value: Number,
    meta_field_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SalaryStructureType"
    }
}, {timestamps: true});