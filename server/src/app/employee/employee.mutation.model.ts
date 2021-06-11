import {
    ArgsType, Field, ID, ObjectType
} from '@nestjs/graphql';

@ArgsType()
@ObjectType()
export class EmployeeCreateMutationModel {

    @Field(() => ID, {
        nullable: true
    })
    public readonly _id?: string = undefined;

    @Field(() => String, {
        nullable: true
    })
    public readonly firstName?: string = undefined;

    @Field(() => String, {
        nullable: true
    })
    public readonly lastName?: string = undefined;

    constructor(initialValue?: any){
        this.firstName = initialValue?.firstName;
        this.lastName = initialValue?.lastName;
    }
}
