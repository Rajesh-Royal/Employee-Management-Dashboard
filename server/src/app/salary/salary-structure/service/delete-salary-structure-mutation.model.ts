import { ArgsType, Field, ID, InputType } from "@nestjs/graphql";

@InputType()
@ArgsType()
export class DeleteSalaryStructureMutationModel {
    @Field(() => ID)
    public readonly fieldId: string = undefined;

    // use typescript interface for initialValue
    constructor(initialValue: any){
        this.fieldId = initialValue?.fieldId;
    }
}