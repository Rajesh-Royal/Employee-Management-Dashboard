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
    public readonly firstName: string = undefined;

    @Field(() => String, {
        nullable: true
    })
    public readonly lastName?: string = undefined;

    @Field(() => String, {
        nullable: true
    })
    public readonly email: string = undefined;

    @Field(() => String, {
        nullable: true
    })
    public readonly city?: string = undefined;

    @Field(() => Number, {
        nullable: true
    })
    public readonly ctc: number = undefined;

    constructor(initialValue?: any){
        this._id = initialValue?._id;
        this.firstName = initialValue?.firstName;
        this.lastName = initialValue?.lastName;
        this.email = initialValue?.email;
        this.city = initialValue?.city;
        this.ctc = initialValue?.ctc;
    }
}
