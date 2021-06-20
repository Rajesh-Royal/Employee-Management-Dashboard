import { SalaryStructureType } from "src/app/shared/salary-structure.type";
export declare class CreateSalaryMetaKeyMutationModel {
    readonly _id?: string;
    readonly salary_meta_key: string;
    readonly type: string;
    readonly disabled: boolean;
    constructor(initialValues?: SalaryStructureType);
}
