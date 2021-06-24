import { Injectable, Logger } from '@nestjs/common';
import { EmployeeSalariesRepositoryService } from 'src/app/employee-salaries/employee-salaries-repository-service';
import { EmployeeSalaryCreateMutationModel } from 'src/app/employee-salaries/service/create-employee-salary-mutation.model';
import { SalaryStructureRepositoryService } from 'src/app/salary/salary-structure/salary-structure-repository.service';
import { SalaryStructureType } from 'src/app/shared/salary-structure.type';
import { EmployeeType } from '../../shared/employee.type';
import { EmployeeRepositoryService } from '../employee-repository.service';
import { EmployeeCreateMutationModel } from './employee-create.mutation.model';


@Injectable()
export class EmployeeCreateMutationService {

  private Logger = new Logger("EmployeeCreateMutationService");

  constructor(private employeeRepositoryService: EmployeeRepositoryService,
    private employeeSalariesRepositoryService: EmployeeSalariesRepositoryService,
    private employeeSalaryStructure: SalaryStructureRepositoryService,
    ) {
  }

  public async serve(operation: EmployeeCreateMutationModel): Promise<EmployeeType> {
    const data = await this.employeeRepositoryService.createEmployee(operation).then(async (employee) => {
      this.Logger.log(`New Employee ${employee?.firstName} Created successfully. EmpId is ${employee?.id}`)
      // get all the available salaryMeta fields created by admin
      // like da, pa, hra and their types.
      await this.employeeSalaryStructure.readSalaryMetaFields().then(async (salaryMetaFields) => {
        this.Logger.log(`Reading salary Meta Fields. Found ${salaryMetaFields?.length} Salary Types. :: They are [${salaryMetaFields.map(sal => sal?.field_name)}]`)
        // create the salary of employee from salary meta fields
        // It will loop through employeeSalary structure and add those fields to the employee salary table.
        const salary = salaryMetaFields.map((field: SalaryStructureType) => {
          return {
            value: 0,
            type: field.type,
            meta_key: field.salary_meta_key,
            meta_field_id: field._id
          }
        })

        // Update the salary of an Employee, If the employee not found then create a new record with that employeeId
        // and the salary structure.
        const employeeSalary = new EmployeeSalaryCreateMutationModel({
          employeeId: employee.id,
          salary: salary
        })

        await this.employeeSalariesRepositoryService.findOneAndUpdateSalary(employeeSalary).then(async (returnedEmployeeSalaryData) => {
          this.Logger.log(`[EmployeeSalary Collection] :: Employee ${employee?.firstName}'s salary created. :: salaryId is ${returnedEmployeeSalaryData?._id}`);
          const employeeSalaryId = new EmployeeCreateMutationModel({
            _id: employee._id,
            salary: returnedEmployeeSalaryData._id
          })

          // once the salary is created for that employee then assign this salaryId to the employee
          await this.employeeRepositoryService.updateEmployeeSalaryId(employeeSalaryId).then(updatedEmployeeData => {
            this.Logger.log(`[employee collection] :: Updated Employee ${updatedEmployeeData?.firstName}'s salaryId. :: salaryId is ${updatedEmployeeData?.salary}`);
          })
        })
      })


      return employee
    })
    return data;
  }
}
