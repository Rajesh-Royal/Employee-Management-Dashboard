"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeCreateMutationModel = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
let EmployeeCreateMutationModel = class EmployeeCreateMutationModel {
    constructor(initialValue) {
        this._id = undefined;
        this.firstName = undefined;
        this.lastName = undefined;
        this.email = undefined;
        this.city = undefined;
        this.ctc = undefined;
        this.salary = undefined;
        this._id = initialValue === null || initialValue === void 0 ? void 0 : initialValue._id;
        this.firstName = initialValue === null || initialValue === void 0 ? void 0 : initialValue.firstName;
        this.lastName = initialValue === null || initialValue === void 0 ? void 0 : initialValue.lastName;
        this.email = initialValue === null || initialValue === void 0 ? void 0 : initialValue.email;
        this.city = initialValue === null || initialValue === void 0 ? void 0 : initialValue.city;
        this.ctc = initialValue === null || initialValue === void 0 ? void 0 : initialValue.ctc;
        this.salary = initialValue === null || initialValue === void 0 ? void 0 : initialValue.salary;
    }
};
__decorate([
    graphql_1.Field(() => graphql_1.ID, {
        nullable: true
    }),
    __metadata("design:type", String)
], EmployeeCreateMutationModel.prototype, "_id", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], EmployeeCreateMutationModel.prototype, "firstName", void 0);
__decorate([
    graphql_1.Field(() => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], EmployeeCreateMutationModel.prototype, "lastName", void 0);
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], EmployeeCreateMutationModel.prototype, "email", void 0);
__decorate([
    graphql_1.Field(() => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], EmployeeCreateMutationModel.prototype, "city", void 0);
__decorate([
    graphql_1.Field(() => Number),
    __metadata("design:type", Number)
], EmployeeCreateMutationModel.prototype, "ctc", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.ID, {
        nullable: true
    }),
    __metadata("design:type", String)
], EmployeeCreateMutationModel.prototype, "salary", void 0);
EmployeeCreateMutationModel = __decorate([
    graphql_1.ArgsType(),
    graphql_1.ObjectType(),
    __metadata("design:paramtypes", [Object])
], EmployeeCreateMutationModel);
exports.EmployeeCreateMutationModel = EmployeeCreateMutationModel;
//# sourceMappingURL=employee-create.mutation.model.js.map