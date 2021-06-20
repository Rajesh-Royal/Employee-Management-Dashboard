import { ArgsType, Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
@ArgsType()
export class ReadEmployeeSalaryQueryModel {
    @Field(() => ID)
    public readonly employeeId: string = undefined;

    constructor(initialValue: any){
        this.employeeId = initialValue?.employeeId
    }
}