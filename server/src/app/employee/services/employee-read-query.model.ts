import {
    ArgsType, Field, ID, ObjectType
} from '@nestjs/graphql';

@ArgsType()
@ObjectType()
export class SingleEmployeeReadQueryModel {

    @Field(() => ID, {
        nullable: true
    })
    public readonly employeeId: string = undefined;


    constructor(initialValue?: any){
        this.employeeId = initialValue?.employeeId;
    }
}
