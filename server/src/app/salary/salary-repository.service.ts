import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EmployeeType } from '../shared/employee.type';

import { SalaryType } from '../shared/salary.type';
import { EmployeeSalaryReadQueryModel } from './service/salary-read.query.model';
import { EmployeeSalaryUpdateMutationService } from './service/salary-update.mutation.service';
import { EmployeeSalaryModel } from './service/salary.model';

@Injectable()
export class SalaryRepositoryService {
    constructor(
        @InjectModel('SalaryType') private readonly SalaryTypeModel: Model<SalaryType>
         ) {
    }

    public createSalary(operation: EmployeeSalaryModel): Promise<SalaryType> {
        return new this.SalaryTypeModel({
            ...(operation.employeeId !== undefined && { employeeId: operation.employeeId }),
            ...(operation.da !== undefined && { da: operation.da }),
            ...(operation.pa !== undefined && { pa: operation.pa }),
            ...(operation.hra !== undefined && { hra: operation.hra }),
            ...(operation.pt !== undefined && { pt: operation.pt }),
            ...(operation.epf !== undefined && { epf: operation.epf }),
        }).save();
    }

    public findSalary(employeeId: string): Promise<SalaryType> {
        return this.SalaryTypeModel.findOne({employeeId: employeeId}).populate("employeeId").exec();
    }

    public updateSalary(operation: EmployeeSalaryModel): any {
        return this.SalaryTypeModel.updateOne(
            { employeeId: operation.employeeId },
            {
                $set: {
                    ...(operation.employeeId !== undefined && { employeeId: operation.employeeId }),
                    ...(operation.da !== undefined && { da: operation.da }),
                    ...(operation.pa !== undefined && { pa: operation.pa }),
                    ...(operation.hra !== undefined && { hra: operation.hra }),
                    ...(operation.pt !== undefined && { pt: operation.pt }),
                    ...(operation.epf !== undefined && { epf: operation.epf }),
                }
            },
            {
                upsert: true
            }
        )
    }

}
