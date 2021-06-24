import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EmployeeType } from '../shared/employee.type';
import { EmployeeCreateMutationModel } from './services/employee-create.mutation.model';
import { SingleEmployeeReadQueryModel } from './services/employee-read-query.model';

@Injectable()
export class EmployeeRepositoryService {
  constructor(
    @InjectModel('EmployeeType') private readonly EmployeeTypeModel: Model<EmployeeType>,
  ) {
  }
// employee
  public async createEmployee(operation: EmployeeCreateMutationModel): Promise<EmployeeType> {
      return await new this.EmployeeTypeModel({
        ...(operation.firstName !== undefined && { firstName: operation.firstName }),
        ...(operation.lastName !== undefined && { lastName: operation.lastName }),
        ...(operation.email !== undefined && { email: operation.email }),
        ...(operation.city !== undefined && { city: operation.city }),
        ...(operation.ctc !== undefined && { ctc: operation.ctc }),
        ...(operation.salary !== undefined && { salary: operation.salary }),
      }).save();
  }

  public async updateEmployeeSalaryId(operation: EmployeeCreateMutationModel) {
    return await this.EmployeeTypeModel.findOneAndUpdate(
      {
        _id: operation._id
      },
      {
        $set: {
          salary: operation.salary
        }
      },
      {returnOriginal: false}
    )
  }

  public async getAllEmployees(): Promise<EmployeeType[]> {
    return await this.EmployeeTypeModel.find().populate("salary").exec();
  }

  public async readAnEmployee(operation: SingleEmployeeReadQueryModel): Promise<EmployeeType> {
    return await this.EmployeeTypeModel.findOne({_id: operation.employeeId}).populate("salary").exec();
  }


}
