import { EmployeeCreateMutationModel } from "./services/employee-create.mutation.model";
import { EmployeeCreateMutationService } from "./services/employee-create.mutation.service";
import { EmployeeType } from "../shared/employee.type";
import { EmployeeListReadQueryService } from "./services/employee-list-read.query.service";
import { EmployeeReadQueryService } from "./services/employee-read-query.service";
import { SingleEmployeeReadQueryModel } from "./services/employee-read-query.model";
export declare class EmployeeResolvers {
    private employeeMutationService;
    private employeeListReadQueryService;
    private employeeReadQueryService;
    constructor(employeeMutationService: EmployeeCreateMutationService, employeeListReadQueryService: EmployeeListReadQueryService, employeeReadQueryService: EmployeeReadQueryService);
    employeeListRead(): GraphQLResolverResult<EmployeeType[]>;
    employeeRead(arguments_: SingleEmployeeReadQueryModel): GraphQLResolverResult<EmployeeType>;
    employeeCreate(arguments_: EmployeeCreateMutationModel): GraphQLResolverResult<EmployeeType>;
}
export declare type GraphQLResolverResult<T> = null | undefined | any[] | Promise<T> | string | number | {};
