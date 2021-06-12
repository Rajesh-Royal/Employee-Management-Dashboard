import {
    ArgsType, Field, ID, ObjectType
} from '@nestjs/graphql';


@ArgsType()
@ObjectType()
export class EmployeeSalaryModel {

    @Field(() => ID, {
        nullable: true
    })
    public readonly _id?: string = undefined;

    @Field(() => String, {
        nullable: true
    })
    public readonly employeeId: string = undefined;

    @Field(() => Number, {
        nullable: true
    })
    public readonly da: number = undefined;

    @Field(() => Number, {
        nullable: true
    })
    public readonly pa: number = undefined;

    @Field(() => Number, {
        nullable: true
    })
    public readonly hra: number = undefined;

    @Field(() => Number, {
        nullable: true
    })
    public readonly pt: number = undefined;

    @Field(() => Number, {
        nullable: true
    })
    public readonly epf: number = undefined;

    constructor(initialValue?: any){
        this.employeeId = initialValue?.employeeId;
        this.da = initialValue?.da;
        this.pa = initialValue?.pa;
        this.hra = initialValue?.hra;
        this.pt = initialValue?.pt;
        this.epf = initialValue?.epf;
    }
}
