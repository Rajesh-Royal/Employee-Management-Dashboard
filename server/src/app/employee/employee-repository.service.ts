import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EmployeeType } from './employee.type';

@Injectable()
export class EmployeeRepositoryService {
  constructor(
    @InjectModel('EmployeeType') private readonly EmployeeTypeModel: Model<EmployeeType>,
  ) {
  }

  public async createEmployee(firstName: string, lastName: string): Promise<EmployeeType> {
      return await new this.EmployeeTypeModel({
        ...(firstName !== undefined && { firstName: firstName }),
        ...(lastName !== undefined && { lastName: lastName }),
      }).save();
  }
}
