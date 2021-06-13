"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeSchema = void 0;
const mongoose = require("mongoose");
exports.EmployeeSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    city: String,
    ctc: Number,
    salary: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SalaryType'
    }
});
//# sourceMappingURL=employee.schema.js.map