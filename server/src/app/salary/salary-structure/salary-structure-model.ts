import { ArgsType, Field, ObjectType, registerEnumType } from "@nestjs/graphql";
import { SalaryStructureMetaKeyTypeEnum } from "src/app/shared/salary-structure-meta-key-type.enum";
import { SalaryStructureType } from "src/app/shared/salary-structure.type";

registerEnumType(SalaryStructureMetaKeyTypeEnum, {
    name: "SalaryStructureMetaKeyTypeEnum"
})

@ArgsType()
@ObjectType()
export class SalaryStructureModel {
    @Field(() => String)
    public readonly salary_meta_key: string = undefined;

    @Field(() => SalaryStructureMetaKeyTypeEnum)
    public readonly type: string = undefined;

    @Field(() => Boolean)
    public readonly disabled: boolean = undefined;

    constructor(initialValues?: SalaryStructureType | any){
        this.salary_meta_key = initialValues?.salary_meta_key;
        this.type = initialValues?.type;
        this.disabled = initialValues?.disabled;
    }
}