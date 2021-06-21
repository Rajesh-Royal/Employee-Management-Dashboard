import { ArgsType, Field } from "@nestjs/graphql";


@ArgsType()
export class UserLoginMutationModel {
    @Field(() => String, {
        nullable: true
    })
    public username: string = undefined;

    @Field(() => String, {
        nullable: true
    })
    public password: string = undefined;

    constructor(initialValues?: userLoginType){
        this.username = initialValues?.username;
        this.password = initialValues?.password;
    }
}

interface userLoginType {
    username: string,
    password: string,
}