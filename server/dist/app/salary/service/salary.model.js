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
exports.EmployeeSalaryModel = void 0;
const graphql_1 = require("@nestjs/graphql");
let EmployeeSalaryModel = class EmployeeSalaryModel {
    constructor(initialValue) {
        this._id = undefined;
        this.employeeId = undefined;
        this.da = undefined;
        this.basic = undefined;
        this.pa = undefined;
        this.hra = undefined;
        this.pt = undefined;
        this.epf = undefined;
        this.employeeId = initialValue === null || initialValue === void 0 ? void 0 : initialValue.employeeId;
        this.basic = initialValue === null || initialValue === void 0 ? void 0 : initialValue.basic;
        this.da = initialValue === null || initialValue === void 0 ? void 0 : initialValue.da;
        this.pa = initialValue === null || initialValue === void 0 ? void 0 : initialValue.pa;
        this.hra = initialValue === null || initialValue === void 0 ? void 0 : initialValue.hra;
        this.pt = initialValue === null || initialValue === void 0 ? void 0 : initialValue.pt;
        this.epf = initialValue === null || initialValue === void 0 ? void 0 : initialValue.epf;
    }
};
__decorate([
    graphql_1.Field(() => graphql_1.ID, {
        nullable: true
    }),
    __metadata("design:type", String)
], EmployeeSalaryModel.prototype, "_id", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.ID, {
        nullable: true
    }),
    __metadata("design:type", String)
], EmployeeSalaryModel.prototype, "employeeId", void 0);
__decorate([
    graphql_1.Field(() => Number, {
        nullable: true
    }),
    __metadata("design:type", Number)
], EmployeeSalaryModel.prototype, "da", void 0);
__decorate([
    graphql_1.Field(() => Number, {
        nullable: true
    }),
    __metadata("design:type", Number)
], EmployeeSalaryModel.prototype, "basic", void 0);
__decorate([
    graphql_1.Field(() => Number, {
        nullable: true
    }),
    __metadata("design:type", Number)
], EmployeeSalaryModel.prototype, "pa", void 0);
__decorate([
    graphql_1.Field(() => Number, {
        nullable: true
    }),
    __metadata("design:type", Number)
], EmployeeSalaryModel.prototype, "hra", void 0);
__decorate([
    graphql_1.Field(() => Number, {
        nullable: true
    }),
    __metadata("design:type", Number)
], EmployeeSalaryModel.prototype, "pt", void 0);
__decorate([
    graphql_1.Field(() => Number, {
        nullable: true
    }),
    __metadata("design:type", Number)
], EmployeeSalaryModel.prototype, "epf", void 0);
EmployeeSalaryModel = __decorate([
    graphql_1.ArgsType(),
    graphql_1.ObjectType(),
    __metadata("design:paramtypes", [Object])
], EmployeeSalaryModel);
exports.EmployeeSalaryModel = EmployeeSalaryModel;
//# sourceMappingURL=salary.model.js.map