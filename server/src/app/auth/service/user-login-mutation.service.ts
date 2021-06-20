import { Injectable, Logger, UnauthorizedException } from "@nestjs/common";
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { AuthModuleType } from "src/app/shared/authModule.type";
import { AuthRepositoryService } from "../auth-repository-service";
import { UserLoginDto } from "../dto/user-login.dto";
import { UserLoginMutationModel } from "./user-login-mutation.model";



@Injectable()
export class UserLoginMutationService {
    private Logger = new Logger("UserLoginMutationService");
    constructor(
        private readonly authRepositoryService: AuthRepositoryService,
        private jwtService: JwtService,
    ){}

    // validate user password if its matching correct with the hash and the salt in database
    // convert user entered password into hash and match it against db hash
    async validatePassword(password: string, salt: string, originalPassword: string): Promise<boolean> {
        const hash = await bcrypt.hash(originalPassword, salt);
        return hash === password;
    }

    public async serve(operation: UserLoginMutationModel): Promise<AuthModuleType | any> {

        const login = await this.authRepositoryService.userLogin(operation);

        const payload: JwtPayload = { username: login.username};
        const accessToken = await this.jwtService.sign(payload);

        if(await this.validatePassword(login.password, login.salt, operation.password)){
            this.Logger.log(`Login of user :: ${login?.username} :: successfully`)
            return new UserLoginDto({
                userId: login._id,
                username: login.username,
                token: accessToken,
            });
        }else{
            throw new UnauthorizedException('Invalid Credentials');
        }
    }
}

export interface JwtPayload {
    username: string;
}