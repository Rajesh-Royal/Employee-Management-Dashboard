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
        // convert to json then parse it to remove null from array.
        // const EmployeeSalaries = JSON.parse(JSON.stringify(operation.salary))
        return this.employeeSalariesModel.updateOne(
            {
            employeeId: operation.employeeId
            },
            {
                ...(operation.employeeId !== undefined && { employeeId: operation.employeeId }),
                salary: operation.salary
            },
            {
                upsert: true
            }
        )
    }

    public readEmployeeSalary(operation: ReadEmployeeSalaryQueryModel){
        return this.employeeSalariesModel.find({employeeId: operation.employeeId}).populate("employeeId").exec();
    }
}