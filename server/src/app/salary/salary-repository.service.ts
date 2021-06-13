import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EmployeeType } from '../shared/employee.type';

import { SalaryType } from '../shared/salary.type';
import { EmployeeSalaryModel } from './service/salary.model';

@Injectable()
export class SalaryRepositoryService {
    private Logger =  new Logger;
    constructor(
        @InjectModel('SalaryType') private readonly SalaryTypeModel: Model<SalaryType>,
        @InjectModel('EmployeeType') private readonly EmployeeTypeModel: Model<EmployeeType>
         ) {
    }

    public createSalary(operation: EmployeeSalaryModel): Promise<SalaryType> {
        return new this.SalaryTypeModel({
            ...(operation.employeeId !== undefined && { employeeId: operation.employeeId }),
            ...((operation.da !== null || operation.da !== null) && { da: operation.da }),
            ...((operation.pa !== undefined || operation.pa !== null) && { pa: operation.pa }),
            ...((operation.hra !== undefined || operation.hra !== null) && { hra: operation.hra }),
            ...((operation.pt !== undefined || operation.pt !== null) && { pt: operation.pt }),
            ...((operation.epf !== undefined || operation.epf !== null) && { epf: operation.epf }),
            ...((operation.basic !== undefined || operation.basic !== null) && { basic: operation.basic }),
        }).save();
    }

    public findSalary(employeeId: string): Promise<SalaryType> {
        return this.SalaryTypeModel.findOne({employeeId: employeeId}).populate("employeeId").exec();
    }

    public async updateSalary(operation: EmployeeSalaryModel): Promise<any> {
        const salaryUpdate = await this.SalaryTypeModel.updateOne(
            { employeeId: operation.employeeId },
            {
                $set: {
                    ...(operation.employeeId !== undefined && { employeeId: operation.employeeId }),
                    ...(operation.da !== undefined && { da: operation.da }),
                    ...(operation.pa !== undefined && { pa: operation.pa }),
                    ...(operation.hra !== undefined && { hra: operation.hra }),
                    ...(operation.pt !== undefined && { pt: operation.pt }),
                    ...(operation.epf !== undefined && { epf: operation.epf }),
                    ...(operation.basic !== undefined && { basic: operation.basic }),
                }
            },
            {
                upsert: true
            }
        );
        this.updateSalaryIdofEmployee(operation.employeeId)
        return salaryUpdate;
    }

    public async updateSalaryIdofEmployee(employeeId): Promise<any> {
        return await this.SalaryTypeModel.findOne({employeeId: employeeId}).then(async (salary) => {
            this.Logger.log(`Found employee to update salary id: ${salary.employeeId}`);
            await this.EmployeeTypeModel.findOneAndUpdate(
                { _id: employeeId },
                {
                    $set: {
                        // @ts-ignore
                        salary: salary._id
                    }
                }
            ).then((emp: EmployeeType) => {
               this.Logger.log(`employee salary Id updated = EmpId: ${emp._id} SalId: ${emp.salary}`)
            })

        })
    }

}
