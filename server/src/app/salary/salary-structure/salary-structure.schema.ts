// this schema defines what fields will be in the employee salary
// this logic is same as postMeta table in wordpress which is used by advance custom fields plugin
import * as mongoose from 'mongoose';

export const SalaryStructureSchema = new mongoose.Schema({
    salary_meta_key: String,
    type: String,
    disabled: Boolean,

}, { timestamps: true });
