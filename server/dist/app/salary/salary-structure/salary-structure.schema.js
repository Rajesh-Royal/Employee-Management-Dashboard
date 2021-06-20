"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalaryStructureSchema = void 0;
const mongoose = require("mongoose");
exports.SalaryStructureSchema = new mongoose.Schema({
    salary_meta_key: String,
    type: String,
    disabled: Boolean,
}, { timestamps: true });
//# sourceMappingURL=salary-structure.schema.js.map