import { SalaryStructureModel } from "./salary-structure-model";
import { CreateSalaryMetaKeyMutationService } from "./service/create-salary-structure-mutation.service";
export declare class SalaryStructureResolver {
    private readonly CreateSalaryMetaKeyMutationService;
    constructor(CreateSalaryMetaKeyMutationService: CreateSalaryMetaKeyMutationService);
    CreateEmployeeSalaryStructureMetaField(_arguments: SalaryStructureModel): Promise<boolean>;
}
