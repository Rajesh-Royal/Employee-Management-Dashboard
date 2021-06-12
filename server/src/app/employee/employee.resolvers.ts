import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { EmployeeCreateMutationModel } from "./services/employee-create.mutation.model"
import { EmployeeCreateMutationService } from "./services/employee-create.mutation.service";
import { EmployeeType } from "../shared/employee.type";
import { EmployeeListReadQueryService } from "./services/employee-list-read.query.service";
import { EmployeeReadQueryModel } from "./services/employee-list-read-query.model";
import { EmployeeReadQueryService } from "./services/employee-read-query.service";

@Resolver()
export class EmployeeResolvers {

  constructor(
    private employeeMutationService: EmployeeCreateMutationService,
    private employeeListReadQueryService: EmployeeListReadQueryService,
    private employeeReadQueryService: EmployeeReadQueryService,
    ) {
  }

  @Query(() => [EmployeeReadQueryModel])
  public employeeListRead(): GraphQLResolverResult<EmployeeType[]> {
    return this.employeeListReadQueryService.serve().then(result => result);
  }

  @Query(() => EmployeeReadQueryModel)
  public employeeRead(@Args("employeeId") employeeId: string): GraphQLResolverResult<EmployeeType> {
    return this.employeeReadQueryService.serve(employeeId).then(result => result);
  }

  @Mutation(() => EmployeeCreateMutationModel)
  public employeeCreate(@Args() arguments_: EmployeeCreateMutationModel): GraphQLResolverResult<EmployeeType> {
    const operation = new EmployeeCreateMutationModel(arguments_);

    return this.employeeMutationService.serve(operation).then(data => data);
  }
}

export type GraphQLResolverResult<T> = null | undefined | any[] | Promise<T> | string | number | {};