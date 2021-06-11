import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { EmployeeCreateMutationModel } from "./employee.mutation.model";
import { EmployeeMutationService } from "./employee.mutation.service";
import { EmployeeType } from "./employee.type";

@Resolver()
export class EmployeeResolvers {

  constructor(private employeeMutationService: EmployeeMutationService) {
  }

  @Query(() => String)
  public sayHello(): string {
    return "Hello World"
  }

  @Mutation(() => EmployeeCreateMutationModel)
  public employeeCreate(@Args() arguments_: EmployeeCreateMutationModel): GraphQLResolverResult<EmployeeType> {
    const operation = new EmployeeCreateMutationModel(arguments_);

    return this.employeeMutationService.serve(operation).then(data => data);
  }
}

export type GraphQLResolverResult<T> = null | undefined | any[] | Promise<T> | string | number | {};