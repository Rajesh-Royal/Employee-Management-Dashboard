import {
    ArgsType, Field, ID, ObjectType
} from '@nestjs/graphql';
import { EmployeeSalaryReadQueryModel } from 'src/app/salary/service/salary-read.query.model';
import { EmployeeType } from 'src/app/shared/employee.type';
import { SalaryType } from 'src/app/shared/salary.type';

@ArgsType()
@ObjectType()
export class EmployeeReadQueryModel {

    @Field(() => ID, {
        nullable: true
    })
    public readonly _id?: string = undefined;

    @Field(() => String, {
        nullable: true
    })
    public readonly firstName: string = undefined;

    @Field(() => String, {
        nullable: true
    })
    public readonly lastName?: string = undefined;

    @Field(() => String, {
        nullable: true
    })
    public readonly email: string = undefined;

    @Field(() => String, {
        nullable: true
    })
    public readonly city?: string = undefined;

    @Field(() => Number, {
        nullable: true
    })
    public readonly ctc: number = undefined;

    @Field(() => EmployeeSalaryReadQueryModel, {
        nullable: true
    })
    public readonly salary?: SalaryType = undefined;


    constructor(initialValue?: EmployeeType){
        this._id = initialValue?._id;
        this.firstName = initialValue?.firstName;
        this.lastName = initialValue?.lastName;
        this.email = initialValue?.email;
        this.city = initialValue?.city;
        this.ctc = initialValue?.ctc;
        this.salary = initialValue?.salary
    }
}
