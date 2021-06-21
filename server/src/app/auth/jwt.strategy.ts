import { Injectable, Logger, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthModuleType } from "../shared/authModule.type";
import { AuthRepositoryService } from "./auth-repository-service";

console.log("running")

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    private Logger = new Logger("JwtStrategy");
    constructor(
        private authRepositoryService: AuthRepositoryService,
    ){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'area51',
        });
    }

    async validate(payload: JwtPayload): Promise<AuthModuleType> {
        this.Logger.log("validate")
        const { username } = payload;
        const user = await this.authRepositoryService.fineOne(username);

        if(!user){
            throw new UnauthorizedException('Token is not valid');
        }
        return user;
    }
}

export interface JwtPayload {
    username: string;
}