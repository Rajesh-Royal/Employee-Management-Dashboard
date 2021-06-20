import { Injectable, Logger } from "@nestjs/common";
import { SalaryStructureType } from "src/app/shared/salary-structure.type";
import { SalaryStructureModel } from "../salary-structure-model";
import { SalaryStructureRepositoryService } from "../salary-structure-repository.service";
import { CreateSalaryMetaKeyMutationModel } from "./create-salary-structure-mutation.model";

@Injectable()
export class CreateSalaryMetaKeyMutationService {
    private Logger = new Logger();

    constructor(
        private readonly salaryStructureRepositoryService: SalaryStructureRepositoryService
    ){
    }

    // ToDo: why the return type is giving error when using only SalaryStructureType
    public async serve(operation: SalaryStructureModel): Promise<SalaryStructureType | any> {
        const createSalaryMetaKey = await this.salaryStructureRepositoryService.createSalaryField(operation);

        if(createSalaryMetaKey?._id){
            return new CreateSalaryMetaKeyMutationModel(createSalaryMetaKey);
        }else{
            return "Cannot Create Salary Meta Key Field";
        }
    }
}