import {
    ArgsType, Field, ID, ObjectType
} from '@nestjs/graphql';
import { IsNotEmpty } from "class-validator"

@ArgsType()
@ObjectType()
export class EmployeeCreateMutationModel {

    @Field(() => ID, {
        nullable: true
    })
    public readonly _id?: string = undefined;

    @IsNotEmpty()
    @Field(() => String)
    public readonly firstName: string = undefined;

    @Field(() => String, {
        nullable: true
    })
    public readonly lastName?: string = undefined;

    @Field(() => String)
    public readonly email: string = undefined;

    @Field(() => String, {
        nullable: true
    })
    public readonly city?: string = undefined;

    @Field(() => Number)
    public readonly ctc: number = undefined;

    @Field(() => ID, {
        nullable: true
    })
    public readonly salary?: string = undefined;


    constructor(initialValue?: any){
        this._id = initialValue?._id;
        this.firstName = initialValue?.firstName;
        this.lastName = initialValue?.lastName;
        this.email = initialValue?.email;
        this.city = initialValue?.city;
        this.ctc = initialValue?.ctc;
        this.salary = initialValue?.salary;
    }
}
