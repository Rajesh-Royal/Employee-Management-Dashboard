import { SalaryStructureType } from "src/app/shared/salary-structure.type";
import { SalaryStructureModel } from "../salary-structure-model";
import { SalaryStructureRepositoryService } from "../salary-structure-repository.service";
export declare class CreateSalaryMetaKeyMutationService {
    private readonly salaryStructureRepositoryService;
    private Logger;
    constructor(salaryStructureRepositoryService: SalaryStructureRepositoryService);
    serve(operation: SalaryStructureModel): Promise<SalaryStructureType | any>;
}
