import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EmployeeCreateMutationModel } from './employee.mutation.model';
import { EmployeeType } from '../shared/employee.type';

@Injectable()
export class EmployeeRepositoryService {
  constructor(
    @InjectModel('EmployeeType') private readonly EmployeeTypeModel: Model<EmployeeType>,
  ) {
  }

  public async createEmployee(operation: EmployeeCreateMutationModel): Promise<EmployeeType> {
      return await new this.EmployeeTypeModel({
        ...(operation.firstName !== undefined && { firstName: operation.firstName }),
        ...(operation.lastName !== undefined && { lastName: operation.lastName }),
        ...(operation.email !== undefined && { email: operation.email }),
        ...(operation.city !== undefined && { city: operation.city }),
        ...(operation.ctc !== undefined && { ctc: operation.ctc }),
      }).save();
  }
}
