import { Model } from "mongoose";
import { SalaryStructureType } from "src/app/shared/salary-structure.type";
import { SalaryStructureModel } from "./salary-structure-model";
export declare class SalaryStructureRepositoryService {
    private readonly SalaryStructureModel;
    private Logger;
    constructor(SalaryStructureModel: Model<SalaryStructureType>);
    createSalaryField(operation: SalaryStructureModel): Promise<SalaryStructureType>;
}
