import { ArgsType, Field, ID, ObjectType, registerEnumType } from "@nestjs/graphql";
import { SalaryStructureMetaKeyTypeEnum } from "src/app/shared/salary-structure-meta-key-type.enum";
import { SalaryStructureType } from "src/app/shared/salary-structure.type";

registerEnumType(SalaryStructureMetaKeyTypeEnum, {
    name: "SalaryStructureMetaKeyTypeEnum"
})

@ArgsType()
@ObjectType()
export class CreateSalaryMetaKeyMutationModel {
    @Field(() => ID, {
        nullable: true
    })
    public readonly _id?: string = undefined;

    @Field(() => String)
    public readonly salary_meta_key: string = undefined;

    @Field(() => SalaryStructureMetaKeyTypeEnum)
    public readonly type: string = undefined;

    @Field(() => Boolean)
    public readonly disabled: boolean = undefined;

    constructor(initialValues?: SalaryStructureType){
        this._id = initialValues?._id;
        this.salary_meta_key = initialValues?.salary_meta_key;
        this.type = initialValues?.type;
        this.disabled = initialValues?.disabled;
    }
}