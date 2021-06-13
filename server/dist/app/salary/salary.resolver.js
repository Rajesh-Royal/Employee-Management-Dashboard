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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalaryResolvers = void 0;
const graphql_1 = require("@nestjs/graphql");
const salary_model_1 = require("./service/salary.model");
const salary_update_mutation_service_1 = require("./service/salary-update.mutation.service");
const salary_read_query_model_1 = require("./service/salary-read.query.model");
const salary_read_query_service_1 = require("./service/salary-read.query.service");
let SalaryResolvers = class SalaryResolvers {
    constructor(employeeSalaryUpdateMutationService, employeeSalaryReadQueryService) {
        this.employeeSalaryUpdateMutationService = employeeSalaryUpdateMutationService;
        this.employeeSalaryReadQueryService = employeeSalaryReadQueryService;
    }
    employeeSalaryRead(employeeId) {
        return this.employeeSalaryReadQueryService.serve(employeeId).then(result => result);
    }
    employeeSalaryUpdate(arguments_) {
        const operation = new salary_model_1.EmployeeSalaryModel(arguments_);
        return this.employeeSalaryUpdateMutationService.serve(operation).then(data => data);
    }
};
__decorate([
    graphql_1.Query(() => salary_read_query_model_1.EmployeeSalaryReadQueryModel),
    __param(0, graphql_1.Args("employeeId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], SalaryResolvers.prototype, "employeeSalaryRead", null);
__decorate([
    graphql_1.Mutation(() => Boolean),
    __param(0, graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [salary_model_1.EmployeeSalaryModel]),
    __metadata("design:returntype", Object)
], SalaryResolvers.prototype, "employeeSalaryUpdate", null);
SalaryResolvers = __decorate([
    graphql_1.Resolver(),
    __metadata("design:paramtypes", [salary_update_mutation_service_1.EmployeeSalaryUpdateMutationService,
        salary_read_query_service_1.EmployeeSalaryReadQueryService])
], SalaryResolvers);
exports.SalaryResolvers = SalaryResolvers;
//# sourceMappingURL=salary.resolver.js.map