import { UseGuards } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { GqlAuthGuard } from "../auth/guards/auth.guard";
import { EmployeeSalaryFieldsType } from "../shared/employee-salary-fields.type";
import { GraphQLResolverResult } from "../shared/graphQL-Resolver-Result.type";
import { EmployeeSalaryCreateMutationModel } from "./service/create-employee-salary-mutation.model";
import { EmployeeSalaryCreateMutationService } from "./service/create-employee-salary-mutation.service";
import { ReadEmployeeSalaryDto } from "./service/dto/employee-salary.dto";
import { ReadEmployeeSalaryQueryModel } from "./service/read-employee-salary-query.model";
import { ReadEmployeeSalaryQueryService } from "./service/read-employee-salary-query.service";
import { UpdateEmployeeSalaryMutationService } from "./service/update-employee-salary-mutation.service";

@Resolver()
export class EmployeeSalariesResolver {
    constructor(
        private employeeSalariesCreateMutationService: EmployeeSalaryCreateMutationService,
        private readEmployeeSalaryQueryService: ReadEmployeeSalaryQueryService,
        private updateEmployeeSalaryMutationService: UpdateEmployeeSalaryMutationService,
    ){}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Boolean)
  public employeeMetaSalaryCreate(@Args() arguments_: EmployeeSalaryCreateMutationModel): GraphQLResolverResult<boolean> {
    const operation = new EmployeeSalaryCreateMutationModel(arguments_);

    return this.employeeSalariesCreateMutationService.serve(operation).then(data => data);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Boolean)
  public employeeMetaSalaryUpdate(@Args() arguments_: EmployeeSalaryCreateMutationModel): GraphQLResolverResult<boolean> {
    const operation = new EmployeeSalaryCreateMutationModel(arguments_);

    return this.updateEmployeeSalaryMutationService.serve(operation).then(data => data);
  }

  // @UseGuards(GqlAuthGuard)
  @Query(() => [ReadEmployeeSalaryDto])
  public employeeMetaSalaryRead(@Args() arguments_: ReadEmployeeSalaryQueryModel): GraphQLResolverResult<EmployeeSalaryFieldsType[]> {
    const operation = new ReadEmployeeSalaryQueryModel(arguments_);

    return this.readEmployeeSalaryQueryService.serve(operation).then(data => data);
  }
}