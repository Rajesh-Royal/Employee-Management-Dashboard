import {
    ArgsType, Field, ID, ObjectType
} from '@nestjs/graphql';
import { EmployeeCreateMutationModel } from 'src/app/employee/services/employee.mutation.model';
import { EmployeeType } from 'src/app/shared/employee.type';

@ArgsType()
@ObjectType()
export class EmployeeSalaryReadQueryModel {

    @Field(() => ID, {
        nullable: true
    })
    public readonly _id?: string = undefined;

    @Field(() => EmployeeCreateMutationModel, {
        nullable: true
    })
    public readonly employee?: EmployeeType = undefined;

    @Field(() => Number, {
        nullable: true
    })
    public readonly da?: number = undefined;

    @Field(() => Number, {
        nullable: true
    })
    public readonly pa?: number = undefined;

    @Field(() => Number, {
        nullable: true
    })
    public readonly hra?: number = undefined;

    @Field(() => Number, {
        nullable: true
    })
    public readonly pt?: number = undefined;

    @Field(() => Number, {
        nullable: true
    })
    public readonly epf?: number = undefined;

    constructor(initialValue?: any){
        this.employee = initialValue?.employeeId;
        this.da = initialValue?.da;
        this.pa = initialValue?.pa;
        this.hra = initialValue?.hra;
        this.pt = initialValue?.pt;
        this.epf = initialValue?.epf;
    }
}
