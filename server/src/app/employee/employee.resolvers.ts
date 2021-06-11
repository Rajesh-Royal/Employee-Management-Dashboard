import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { EmployeeCreateMutationModel } from "./employee.mutation.model";
import { EmployeeMutationService } from "./employee.mutation.service";
import { EmployeeType } from "../shared/employee.type";
import { EmployeeListReadQueryService } from "./services/employee-list-read.query.service";

@Resolver()
export class EmployeeResolvers {

  constructor(
    private employeeMutationService: EmployeeMutationService,
    private employeeListReadQueryService: EmployeeListReadQueryService) {
  }

  @Query(() => [EmployeeCreateMutationModel])
  public employeeListRead(): GraphQLResolverResult<EmployeeType[]> {
    return this.employeeListReadQueryService.serve().then(result => result);
  }

  @Mutation(() => EmployeeCreateMutationModel)
  public employeeCreate(@Args() arguments_: EmployeeCreateMutationModel): GraphQLResolverResult<EmployeeType> {
    const operation = new EmployeeCreateMutationModel(arguments_);

    return this.employeeMutationService.serve(operation).then(data => data);
  }
}

export type GraphQLResolverResult<T> = null | undefined | any[] | Promise<T> | string | number | {};