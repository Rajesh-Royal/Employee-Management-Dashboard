import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { EmployeeSalaryFieldsType } from "../shared/employee-salary-fields.type";
import { EmployeeSalaryCreateMutationModel } from "./service/create-employee-salary-mutation.model";
import { ReadEmployeeSalaryQueryModel } from "./service/read-employee-salary-query.model";

@Injectable()
export class EmployeeSalariesRepositoryService {
    constructor(
        @InjectModel("EmployeeSalaries") private readonly employeeSalariesModel: Model<EmployeeSalaryFieldsType>
    ){}

    public createEmployeeSalary(operation: EmployeeSalaryCreateMutationModel){
        return new this.employeeSalariesModel({
            ...(operation.employeeId !== undefined && { employeeId: operation.employeeId }),
            ...(operation.meta_key !== undefined && {  meta_key: operation.meta_key }),
            ...(operation.meta_field_id !== undefined && { meta_field_id: operation.meta_field_id }),
            ...(operation.value !== undefined && { value: operation.value }),
        }).save();
    }

    public readEmployeeSalary(operation: ReadEmployeeSalaryQueryModel){
        return this.employeeSalariesModel.find({employeeId: operation.employeeId}).populate("employeeId").populate("meta_field_id").exec();
    }
}