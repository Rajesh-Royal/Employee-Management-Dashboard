import { Injectable } from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { AuthModuleType } from "src/app/shared/authModule.type";
import { AuthRepositoryService } from "../auth-repository-service";
import { UserRegisterDto } from "../dto/user-register.dto";
import { RegisterNewUserMutationModel } from "./register-new-user-mutation.model";

@Injectable()
export class RegisterNewUserMutationService {
    constructor(
        private readonly authRepositoryService: AuthRepositoryService,
    ){}

    // hash user password
    private async hashPassword(password: string, salt: string): Promise<string> {
        return bcrypt.hash(password, salt);
    }

    public async serve(operation: RegisterNewUserMutationModel): Promise<AuthModuleType | any> {
        // convert password to hash value
        operation.salt = await bcrypt.genSalt();
        operation.password = await this.hashPassword(operation.password, operation.salt);

        const user = await this.authRepositoryService.registerUser(operation);

        if(user?._id){
            return new UserRegisterDto(user);
        }else {
            throw new Error("Cannot register this user")
        }
    }
}