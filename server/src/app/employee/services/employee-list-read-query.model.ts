import {
    ArgsType, Field, ID, ObjectType
} from '@nestjs/graphql';
import { EmployeeType } from 'src/app/shared/employee.type';
import { SalaryTypeDto } from '../../employee-salaries/service/dto/employee-salary.dto';


@ArgsType()
@ObjectType()
export class EmployeeSalaryTypeDto {
    @Field(() => ID, {
        nullable: true
    })
    public readonly _id?: string = undefined;

    @Field(() => ID, {
        nullable: true
    })
    public readonly employeeId?: string = undefined;

    @Field(() => [SalaryTypeDto], {
        nullable: true
    })
    public readonly salary: SalaryTypeDto = undefined
}

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

    @Field(() => EmployeeSalaryTypeDto, {
        nullable: true
    })
    public readonly salary?: EmployeeSalaryTypeDto = undefined;


    constructor(initialValue?: EmployeeType | any){
        this._id = initialValue?._id;
        this.firstName = initialValue?.firstName;
        this.lastName = initialValue?.lastName;
        this.email = initialValue?.email;
        this.city = initialValue?.city;
        this.ctc = initialValue?.ctc;
        this.salary = initialValue?.salary
    }
}
