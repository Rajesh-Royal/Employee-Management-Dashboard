import { ArgsType, Field, ID, ObjectType } from "@nestjs/graphql";
import { EmployeeCreateMutationModel } from "src/app/employee/services/employee-create.mutation.model";
import { SalaryStructureModel } from "src/app/salary/salary-structure/salary-structure-model";

@ObjectType()
@ArgsType()
export class ReadEmployeeSalaryDto {
    @Field(() => ID, {
        nullable: true
    })
    public readonly _id?: string = undefined;

    @Field(() => EmployeeCreateMutationModel)
    public readonly employeeId: string = undefined;

    @Field(() => Number)
    public readonly value: number = undefined;

    @Field(() => String)
    public readonly meta_key: string = undefined;

    @Field(() => SalaryStructureModel)
    public readonly meta_field_id: string = undefined;

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
        this.meta_key = initialValue?.meta_key;
        this.meta_field_id = initialValue?.meta_field_id;
        this.value = initialValue?.value;
        this.createdAt = initialValue?.createdAt;
        this.updatedAt = initialValue?.updatedAt;
    }
}