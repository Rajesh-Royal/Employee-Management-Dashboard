import { UseGuards } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { GqlAuthGuard } from "src/app/auth/guards/auth.guard";
import { GraphQLResolverResult } from "src/app/shared/graphQL-Resolver-Result.type";
import { SalaryStructureType } from "src/app/shared/salary-structure.type";
import { SalaryStructureModel } from "./salary-structure-model";
import { CreateSalaryMetaKeyMutationModel } from "./service/create-salary-structure-mutation.model";
import { CreateSalaryMetaKeyMutationService } from "./service/create-salary-structure-mutation.service";
import { ReadSalaryMetaKeysQueryService } from "./service/create-salary-structure-query.service";
import { DeleteSalaryStructureMutationService } from "./service/delete-salary-structure-mutation-service";
import { DeleteSalaryStructureMutationModel } from "./service/delete-salary-structure-mutation.model";

@Resolver()
export class SalaryStructureResolver {
    constructor(
        private readonly createSalaryMetaKeyMutationService: CreateSalaryMetaKeyMutationService,
        private readonly readSalaryMetaKeyQueryService: ReadSalaryMetaKeysQueryService,
        private readonly deleteSalaryStructureMutationService: DeleteSalaryStructureMutationService
    ){}

    @UseGuards(GqlAuthGuard)
    @Mutation(() => CreateSalaryMetaKeyMutationModel)
    public  async CreateEmployeeSalaryStructureMetaField(@Args() _arguments: SalaryStructureModel): Promise<SalaryStructureType> {
        const operation = new SalaryStructureModel(_arguments);
        return await this.createSalaryMetaKeyMutationService.serve(operation).then(data => data);
    }

    @Mutation(() => Boolean)
    public async DeleteEmployeeSalaryStructureMetaField(@Args() _arguments: DeleteSalaryStructureMutationModel): Promise<GraphQLResolverResult<boolean>> {

        const operation = new DeleteSalaryStructureMutationModel(_arguments);
        return await this.deleteSalaryStructureMutationService.serve(operation).then(data => data);
    }

    @UseGuards(GqlAuthGuard)
    @Query(() => [CreateSalaryMetaKeyMutationModel])
    public  async getEmployeeSalaryStructureMetaFields(): Promise<boolean> {
        return await this.readSalaryMetaKeyQueryService.serve().then(data => data);
    }
}