import { ArgsType, Field, ID, ObjectType } from "@nestjs/graphql";
import { AuthModuleType } from "src/app/shared/authModule.type";

@ArgsType()
@ObjectType()
export class UserRegisterDto {
    @Field(() => ID)
    public readonly _id: string = undefined;

    @Field(() => String)
    public readonly username: string = undefined;

    @Field(() => String)
    public readonly password: string = undefined;

    @Field(() => String)
    public readonly email: string = undefined;

    @Field(() => Number)
    public readonly mobile: number = undefined;

    @Field(() => Date)
    public readonly createdAt: string = undefined;

    @Field(() => Date)
    public readonly updatedAt: string = undefined;

    @Field(() => String)
    public readonly salt: string = undefined;

    constructor(initialValue?: AuthModuleType | any){
        this._id = initialValue?._id
        this.username = initialValue?.username;
        this.password = initialValue?.password;
        this.salt = initialValue?.salt;
        this.email = initialValue?.email;
        this.mobile = initialValue?.mobile;
        this.updatedAt = initialValue?.updatedAt;
        this.createdAt = initialValue?.createdAt;
    }
}