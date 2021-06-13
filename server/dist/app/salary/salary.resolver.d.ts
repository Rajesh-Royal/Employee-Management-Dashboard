import { SalaryType } from "../shared/salary.type";
import { EmployeeSalaryModel } from "./service/salary.model";
import { EmployeeSalaryUpdateMutationService } from "./service/salary-update.mutation.service";
import { EmployeeSalaryReadQueryService } from "./service/salary-read.query.service";
export declare class SalaryResolvers {
    private employeeSalaryUpdateMutationService;
    private employeeSalaryReadQueryService;
    constructor(employeeSalaryUpdateMutationService: EmployeeSalaryUpdateMutationService, employeeSalaryReadQueryService: EmployeeSalaryReadQueryService);
    employeeSalaryRead(employeeId: string): GraphQLResolverResult<SalaryType>;
    employeeSalaryUpdate(arguments_: EmployeeSalaryModel): GraphQLResolverResult<boolean>;
}
export declare type GraphQLResolverResult<T> = null | undefined | any[] | Promise<T> | string | number | {};
