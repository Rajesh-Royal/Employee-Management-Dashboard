import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { SalaryStructureModel } from "../salary/salary-structure/salary-structure-model";
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

    // findOne and update
    // insert if not find
    public findOneAndUpdateSalary(operation: EmployeeSalaryCreateMutationModel){
        return this.employeeSalariesModel.findOneAndUpdate(
            {
            employeeId: operation.employeeId
            },
            {
                ...(operation.employeeId !== undefined && { employeeId: operation.employeeId }),
                salary: operation.salary
            },
            {
                upsert: true,
                returnOriginal: false
            },
            // function (err, documents) {
            //     return ({ error: err, affected: documents });
            // }
        )
    }

    // add a new salary field in employeeSalarie's salary array
    public addEmployeeSalaryField(operation: SalaryStructureModel) {
        const salaryField = {
            value: 0,
            type: operation.type,
            meta_key: operation.salary_meta_key,
            meta_field_id: operation._id
        }
        return this.employeeSalariesModel.updateMany(
            {
                $addToSet: {
                    salary: salaryField
                }
            }
        )
    }

    public readEmployeeSalary(operation: ReadEmployeeSalaryQueryModel){
        return this.employeeSalariesModel.find({employeeId: operation.employeeId}).populate("employeeId").exec();
    }
}