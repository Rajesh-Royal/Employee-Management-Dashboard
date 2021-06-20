// this schema defines what fields will be in the employee salary
// this logic is same as postMeta table in wordpress which is used by advance custom fields plugin
import * as mongoose from 'mongoose';
import * as uniqueValidator from "mongoose-unique-validator";

export const SalaryStructureSchema = new mongoose.Schema({
    salary_meta_key: {
        type: String,
        unique: true
    },
    field_name: String,
    type: String,
    disabled: Boolean,

}, { timestamps: true });

SalaryStructureSchema.plugin(uniqueValidator, { message: 'Error, {VALUE} already exist.' });