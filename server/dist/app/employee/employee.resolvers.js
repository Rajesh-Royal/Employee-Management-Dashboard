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
exports.EmployeeResolvers = void 0;
const graphql_1 = require("@nestjs/graphql");
const employee_create_mutation_model_1 = require("./services/employee-create.mutation.model");
const employee_create_mutation_service_1 = require("./services/employee-create.mutation.service");
const employee_list_read_query_service_1 = require("./services/employee-list-read.query.service");
const employee_list_read_query_model_1 = require("./services/employee-list-read-query.model");
const employee_read_query_service_1 = require("./services/employee-read-query.service");
const employee_read_query_model_1 = require("./services/employee-read-query.model");
let EmployeeResolvers = class EmployeeResolvers {
    constructor(employeeMutationService, employeeListReadQueryService, employeeReadQueryService) {
        this.employeeMutationService = employeeMutationService;
        this.employeeListReadQueryService = employeeListReadQueryService;
        this.employeeReadQueryService = employeeReadQueryService;
    }
    employeeListRead() {
        return this.employeeListReadQueryService.serve().then(result => result);
    }
    employeeRead(arguments_) {
        const operation = new employee_read_query_model_1.SingleEmployeeReadQueryModel(arguments_);
        return this.employeeReadQueryService.serve(operation).then(result => result);
    }
    employeeCreate(arguments_) {
        const operation = new employee_create_mutation_model_1.EmployeeCreateMutationModel(arguments_);
        return this.employeeMutationService.serve(operation).then(data => data);
    }
};
__decorate([
    graphql_1.Query(() => [employee_list_read_query_model_1.EmployeeReadQueryModel]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], EmployeeResolvers.prototype, "employeeListRead", null);
__decorate([
    graphql_1.Query(() => employee_list_read_query_model_1.EmployeeReadQueryModel),
    __param(0, graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [employee_read_query_model_1.SingleEmployeeReadQueryModel]),
    __metadata("design:returntype", Object)
], EmployeeResolvers.prototype, "employeeRead", null);
__decorate([
    graphql_1.Mutation(() => employee_create_mutation_model_1.EmployeeCreateMutationModel),
    __param(0, graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [employee_create_mutation_model_1.EmployeeCreateMutationModel]),
    __metadata("design:returntype", Object)
], EmployeeResolvers.prototype, "employeeCreate", null);
EmployeeResolvers = __decorate([
    graphql_1.Resolver(),
    __metadata("design:paramtypes", [employee_create_mutation_service_1.EmployeeCreateMutationService,
        employee_list_read_query_service_1.EmployeeListReadQueryService,
        employee_read_query_service_1.EmployeeReadQueryService])
], EmployeeResolvers);
exports.EmployeeResolvers = EmployeeResolvers;
//# sourceMappingURL=employee.resolvers.js.map