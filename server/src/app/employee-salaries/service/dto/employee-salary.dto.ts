import { ArgsType, Field, ID, ObjectType } from "@nestjs/graphql";
import { EmployeeCreateMutationModel } from "src/app/employee/services/employee-create.mutation.model";

@ArgsType()
@ObjectType()
class SalaryTypeDto {
    @Field(() => Number)
    public readonly value: number = undefined;

    @Field(() => String)
    public readonly meta_key: string = undefined;

    @Field(() => String)
    public readonly meta_field_id: string = undefined;
    // ToDo: use SalaryStructureModel if we need to get field values

    @Field(() => String)
    public readonly type: string = undefined;
}

@ObjectType()
@ArgsType()
export class ReadEmployeeSalaryDto {
    @Field(() => ID, {
        nullable: true
    })
    public readonly _id?: string = undefined;

    @Field(() => EmployeeCreateMutationModel)
    public readonly employeeId: string = undefined;

    @Field(() =>[SalaryTypeDto])
    public readonly salary: SalaryTypeDto[] = [];

    @Field(() => Date, {
        nullable: true
    })
    public readonly createdAt: string = undefined;

    @Field(() => Date, {
        nullable: true
    })
    public readonly updatedAt: string = undefined;

    constructor(initialValue: any){
        this.employeeId = initialValue?.employeeId,
        this._id = initialValue?._id;
        this.salary = initialValue?.salary;
        // this.meta_key = initialValue?.meta_key;
        // this.meta_field_id = initialValue?.meta_field_id;
        // this.value = initialValue?.value;
        this.createdAt = initialValue?.createdAt;
        this.updatedAt = initialValue?.updatedAt;
    }
}