import { SalaryStructureType } from "src/app/shared/salary-structure.type";
export declare class SalaryStructureModel {
    readonly salary_meta_key: string;
    readonly type: string;
    readonly disabled: boolean;
    constructor(initialValues?: SalaryStructureType | any);
}
