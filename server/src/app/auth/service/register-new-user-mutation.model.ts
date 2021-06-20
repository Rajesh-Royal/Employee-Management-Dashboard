import { ArgsType, Field, ObjectType } from "@nestjs/graphql";
import { IsString, Matches, MaxLength, MinLength } from "class-validator";
import { AuthModuleType } from "src/app/shared/authModule.type";


@ArgsType()
@ObjectType()
export class RegisterNewUserMutationModel {
    @IsString()
    @MinLength(6)
    @MaxLength(20)
    @Matches(/^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/, {
        message: 'Username should not contain Whitespace or special characters and only lowercase letters'
    })
    @Field(() => String)
    public readonly username: string = undefined;

    @IsString()
    @MinLength(8)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'Password is too weak It should be combination of Uppercase, lowercase and special character and digits'
    })
    @Field(() => String)
    public password: string = undefined;

    @Field(() => String)
    public readonly email: string = undefined;

    @Field(() => Number)
    public readonly mobile: number = undefined;

    @Field(() => String, {
        nullable: true
    })
    public salt?: string = undefined;

    constructor(initialValue?: AuthModuleType | any){
        this.username = initialValue?.username;
        this.password = initialValue?.password;
        this.email = initialValue?.email;
        this.mobile = initialValue?.mobile;
        this.salt = initialValue?.salt;
    }
}