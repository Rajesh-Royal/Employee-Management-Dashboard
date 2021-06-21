import { ValidationPipe } from "@nestjs/common";
import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { AuthModuleType } from "../shared/authModule.type";
import { UserLoginDto } from "./dto/user-login.dto";
import { UserRegisterDto } from "./dto/user-register.dto";
import { RegisterNewUserMutationModel } from "./service/register-new-user-mutation.model";
import { RegisterNewUserMutationService } from "./service/register-new-user.mutation.service";
import { UserLoginMutationModel } from "./service/user-login-mutation.model";
import { UserLoginMutationService } from "./service/user-login-mutation.service";

@Resolver()
export class AuthResolver {
    constructor(
        private readonly registerNewUserMutationService: RegisterNewUserMutationService,
        private readonly userLoginMutationService: UserLoginMutationService
    ){}

    @Mutation(() => UserRegisterDto)
    public async RegisterUser(@Args(ValidationPipe) arguments_: RegisterNewUserMutationModel): Promise<AuthModuleType | any> {
        const operation = new RegisterNewUserMutationModel(arguments_);

        return this.registerNewUserMutationService.serve(operation).then(data => {
            return data;
        });
    }

    @Mutation(() => UserLoginDto)
    public async LoginUser(@Args() arguments_: UserLoginMutationModel): Promise<AuthModuleType | any> {
        const operation = new UserLoginMutationModel(arguments_);

        return await this.userLoginMutationService.serve(operation).then(data => {
            return data;
        })
    }

}