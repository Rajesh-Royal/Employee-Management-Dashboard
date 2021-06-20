import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { SalaryStructureType } from "src/app/shared/salary-structure.type";
import { SalaryStructureModel } from "./salary-structure-model";
import { CreateSalaryMetaKeyMutationModel } from "./service/create-salary-structure-mutation.model";
import { CreateSalaryMetaKeyMutationService } from "./service/create-salary-structure-mutation.service";
import { ReadSalaryMetaKeysQueryService } from "./service/create-salary-structure-query.service";

@Resolver()
export class SalaryStructureResolver {
    constructor(
        private readonly createSalaryMetaKeyMutationService: CreateSalaryMetaKeyMutationService,
        private readonly readSalaryMetaKeyQueryService: ReadSalaryMetaKeysQueryService,
    ){}

    @Mutation(() => CreateSalaryMetaKeyMutationModel)
    public  async CreateEmployeeSalaryStructureMetaField(@Args() _arguments: SalaryStructureModel): Promise<SalaryStructureType> {
        const operation = new SalaryStructureModel(_arguments);
        return await this.createSalaryMetaKeyMutationService.serve(operation).then(data => data);
    }

    @Query(() => [CreateSalaryMetaKeyMutationModel])
    public  async getEmployeeSalaryStructureMetaFields(): Promise<boolean> {
        return await this.readSalaryMetaKeyQueryService.serve().then(data => data);
    }
}