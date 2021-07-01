import { Injectable, Logger } from "@nestjs/common";
import { SalaryStructureType } from "src/app/shared/salary-structure.type";
import { SalaryStructureRepositoryService } from "../salary-structure-repository.service";
import { CreateSalaryMetaKeyMutationModel } from "./create-salary-structure-mutation.model";

@Injectable()
export class ReadSalaryMetaKeysQueryService {
    private Logger = new Logger("ReadSalaryMetaKeysQueryService");

    constructor(
        private readonly salaryStructureRepositoryService: SalaryStructureRepositoryService
    ) {
    }

    public async serve(): Promise<SalaryStructureType[] | any> {
        const readSalaryMetaKey = await this.salaryStructureRepositoryService.readSalaryMetaFields().then((data) => {
            return data.map((salaryMetaField) => {
                return new CreateSalaryMetaKeyMutationModel(salaryMetaField);
            })
        });

        if (readSalaryMetaKey?.length > 0) {
            return readSalaryMetaKey;
        } else {
            return ["Cannot read Salary Meta Key Fields"];
        }
    }
}