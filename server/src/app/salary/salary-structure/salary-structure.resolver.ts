import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { SalaryStructureModel } from "./salary-structure-model";
import { CreateSalaryMetaKeyMutationModel } from "./service/create-salary-structure-mutation.model";
import { CreateSalaryMetaKeyMutationService } from "./service/create-salary-structure-mutation.service";

@Resolver()
export class SalaryStructureResolver {
    constructor(
        private readonly CreateSalaryMetaKeyMutationService: CreateSalaryMetaKeyMutationService
    ){

    }

    @Mutation(() => CreateSalaryMetaKeyMutationModel)
    public  async CreateEmployeeSalaryStructureMetaField(@Args() _arguments: SalaryStructureModel): Promise<boolean> {
        const operation = new SalaryStructureModel(_arguments);
        return await this.CreateSalaryMetaKeyMutationService.serve(operation).then(data => data);
    }
}