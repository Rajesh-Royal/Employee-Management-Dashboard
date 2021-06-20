import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { AuthModuleType } from "../shared/authModule.type";
import { RegisterNewUserMutationModel } from "./service/register-new-user-mutation.model";
import { UserLoginMutationModel } from "./service/user-login-mutation.model";

@Injectable()
export class AuthRepositoryService {
    constructor(
        @InjectModel("AuthModuleType") private readonly AuthModuleModel: Model<AuthModuleType>
    ){}

    public registerUser(operation: RegisterNewUserMutationModel): Promise<AuthModuleType> {
        return new this.AuthModuleModel({
            ...(operation.email !== undefined && {email: operation.email}),
            ...(operation.mobile !== undefined && {mobile: operation.mobile}),
            ...(operation.password !== undefined && {password: operation.password}),
            ...(operation.username !== undefined && {username: operation.username}),
            ...(operation.salt !== undefined && {salt: operation.salt}),
        }).save();
    }

    public userLogin(operation: UserLoginMutationModel): Promise<AuthModuleType> {
        return this.AuthModuleModel.findOne({ username: operation.username}).exec();
    }

    public fineOne(username: string): Promise<AuthModuleType> {
        return this.AuthModuleModel.findOne({ username: username}).exec();
    }
}