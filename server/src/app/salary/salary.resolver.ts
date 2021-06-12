import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { SalaryType } from "../shared/salary.type";
import { EmployeeSalaryModel } from "./service/salary.model";
import { EmployeeSalaryUpdateMutationService } from "./service/salary-update.mutation.service";
import { EmployeeSalaryReadQueryModel } from "./service/salary-read.query.model";
import { EmployeeSalaryReadQueryService } from "./service/salary-read.query.service";


@Resolver()
export class SalaryResolvers {

  constructor(
    private employeeSalaryUpdateMutationService: EmployeeSalaryUpdateMutationService,
    private employeeSalaryReadQueryService: EmployeeSalaryReadQueryService,

    ) {
  }

  @Query(() => EmployeeSalaryReadQueryModel)
  public employeeSalaryRead(@Args() arguments_: EmployeeSalaryReadQueryModel): GraphQLResolverResult<SalaryType> {
    const operation = new EmployeeSalaryReadQueryModel(arguments_)
    return this.employeeSalaryReadQueryService.serve(operation).then(result => result);
  }

  @Mutation(() => Boolean)
  public employeeSalaryUpdate(@Args() arguments_: EmployeeSalaryModel): GraphQLResolverResult<boolean> {
    const operation = new EmployeeSalaryModel(arguments_);

    return this.employeeSalaryUpdateMutationService.serve(operation).then(data => data);
  }
}

export type GraphQLResolverResult<T> = null | undefined | any[] | Promise<T> | string | number | {};