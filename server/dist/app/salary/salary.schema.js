"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalarySchema = void 0;
const mongoose = require("mongoose");
exports.SalarySchema = new mongoose.Schema({
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
//# sourceMappingURL=salary.schema.js.map