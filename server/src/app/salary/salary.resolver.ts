import { UseGuards } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { GqlAuthGuard } from "../auth/guards/auth.guard";
import { GraphQLResolverResult } from "../employee/employee.resolvers";
import { SalaryType } from "../shared/salary.type";
import { EmployeeSalaryReadQueryModel } from "./service/salary-read.query.model";
import { EmployeeSalaryReadQueryService } from "./service/salary-read.query.service";
import { EmployeeSalaryUpdateMutationService } from "./service/salary-update.mutation.service";
import { EmployeeSalaryModel } from "./service/salary.model";


@Resolver()
export class SalaryResolvers {

  constructor(
    private employeeSalaryUpdateMutationService: EmployeeSalaryUpdateMutationService,
    private employeeSalaryReadQueryService: EmployeeSalaryReadQueryService,

    ) {
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => EmployeeSalaryReadQueryModel)
  public employeeSalaryRead(@Args("employeeId") employeeId: string): GraphQLResolverResult<SalaryType> {

    return this.employeeSalaryReadQueryService.serve(employeeId).then(result => result);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Boolean)
  public employeeSalaryUpdate(@Args() arguments_: EmployeeSalaryModel): GraphQLResolverResult<boolean> {
    const operation = new EmployeeSalaryModel(arguments_);

    return this.employeeSalaryUpdateMutationService.serve(operation).then(data => data);
  }
}