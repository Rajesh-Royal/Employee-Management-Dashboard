import { UseGuards } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { GqlAuthGuard } from "../auth/guards/auth.guard";
import { EmployeeType } from "../shared/employee.type";
import { GraphQLResolverResult } from "../shared/graphQL-Resolver-Result.type";
import { EmployeeCreateMutationModel } from "./services/employee-create.mutation.model";
import { EmployeeCreateMutationService } from "./services/employee-create.mutation.service";
import { EmployeeReadQueryModel } from "./services/employee-list-read-query.model";
import { EmployeeListReadQueryService } from "./services/employee-list-read.query.service";
import { SingleEmployeeReadQueryModel } from "./services/employee-read-query.model";
import { EmployeeReadQueryService } from "./services/employee-read-query.service";

@Resolver()
export class EmployeeResolvers {

  constructor(
    private employeeMutationService: EmployeeCreateMutationService,
    private employeeListReadQueryService: EmployeeListReadQueryService,
    private employeeReadQueryService: EmployeeReadQueryService,
    ) {
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [EmployeeReadQueryModel])
  public employeeListRead(): GraphQLResolverResult<EmployeeType[]> {
    return this.employeeListReadQueryService.serve().then(result => result);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => EmployeeReadQueryModel)
  public employeeRead(@Args() arguments_: SingleEmployeeReadQueryModel): GraphQLResolverResult<EmployeeType> {
    const operation = new SingleEmployeeReadQueryModel(arguments_)
    return this.employeeReadQueryService.serve(operation).then(result => result);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => EmployeeCreateMutationModel)
  public employeeCreate(@Args() arguments_: EmployeeCreateMutationModel): GraphQLResolverResult<EmployeeType> {
    const operation = new EmployeeCreateMutationModel(arguments_);

    return this.employeeMutationService.serve(operation).then(data => data);
  }
}
