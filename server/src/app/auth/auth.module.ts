import { Module } from "@nestjs/common";
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from "@nestjs/mongoose";
import { PassportModule } from '@nestjs/passport';
import { AuthRepositoryService } from "./auth-repository-service";
import { AuthResolver } from "./auth.resolver";
import { AuthModuleSchema } from "./auth.schema";
import { JwtStrategy } from "./jwt.strategy";
import { RegisterNewUserMutationService } from "./service/register-new-user.mutation.service";
import { UserLoginMutationService } from "./service/user-login-mutation.service";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: "AuthModuleType",
                schema: AuthModuleSchema,
                collection: "UserCredentials"
            }
        ]),
        JwtModule.register({
            secret: 'area51',
            signOptions: {
              expiresIn: 3600,
            }
          }),
          PassportModule.register({
            defaultStrategy: 'jwt',
          })
    ],
    providers: [
        AuthRepositoryService,
        AuthResolver,
        RegisterNewUserMutationService,
        UserLoginMutationService,
        JwtStrategy
    ],
    exports: [
        MongooseModule,
        PassportModule,
        JwtStrategy,
        AuthRepositoryService
    ]
})

export class AuthModule {}