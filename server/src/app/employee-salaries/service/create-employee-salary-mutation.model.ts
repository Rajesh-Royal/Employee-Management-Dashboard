import {
    ArgsType, Field, ID, ObjectType
} from '@nestjs/graphql';

@ArgsType()
@ObjectType()
export class EmployeeSalaryCreateMutationModel {

    @Field(() => ID, {
        nullable: true
    })
    public readonly _id?: string = undefined;

    @Field(() => String)
    public readonly employeeId: string = undefined;

    @Field(() => Number)
    public readonly value: number = undefined;

    @Field(() => String)
    public readonly meta_key: string = undefined;

    @Field(() => String)
    public readonly meta_field_id: string = undefined;

    constructor(initialValue?: any){
        this._id = initialValue?._id;
        this.employeeId = initialValue?.employeeId;
        this.value = initialValue?.value;
        this.meta_key = initialValue?.meta_key;
        this.meta_field_id = initialValue?.meta_field_id;
    }
}
