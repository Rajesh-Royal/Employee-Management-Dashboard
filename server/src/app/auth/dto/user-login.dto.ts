import { Field, ID, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class UserLoginDto {

    @Field(() => ID, {
        nullable: true
    })
    public readonly userId?: string = undefined;

    @Field(() => String, {
        nullable: true
    })
    public readonly token?: string = undefined;

    @Field(() => String, {
        nullable: true
    })
    public readonly username?: string = undefined;

    constructor(initialValues?: any){
        this.userId = initialValues?._id;
        this.token = initialValues?.token;
        this.username = initialValues?.username;
    }
}