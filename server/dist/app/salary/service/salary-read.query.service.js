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
exports.EmployeeSalaryReadQueryService = void 0;
const common_1 = require("@nestjs/common");
const salary_repository_service_1 = require("../salary-repository.service");
const salary_read_query_model_1 = require("./salary-read.query.model");
let EmployeeSalaryReadQueryService = class EmployeeSalaryReadQueryService {
    constructor(salaryRepositoryService) {
        this.salaryRepositoryService = salaryRepositoryService;
    }
    async serve(employeeId) {
        const data = await this.salaryRepositoryService.findSalary(employeeId);
        return new salary_read_query_model_1.EmployeeSalaryReadQueryModel(data);
    }
};
EmployeeSalaryReadQueryService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [salary_repository_service_1.SalaryRepositoryService])
], EmployeeSalaryReadQueryService);
exports.EmployeeSalaryReadQueryService = EmployeeSalaryReadQueryService;
//# sourceMappingURL=salary-read.query.service.js.map