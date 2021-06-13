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
exports.EmployeeReadQueryService = void 0;
const common_1 = require("@nestjs/common");
const employee_repository_service_1 = require("../employee-repository.service");
const employee_list_read_query_model_1 = require("./employee-list-read-query.model");
let EmployeeReadQueryService = class EmployeeReadQueryService {
    constructor(employeeRepositoryService) {
        this.employeeRepositoryService = employeeRepositoryService;
    }
    async serve(operation) {
        const data = await this.employeeRepositoryService.readAnEmployee(operation);
        return new employee_list_read_query_model_1.EmployeeReadQueryModel(data);
    }
};
EmployeeReadQueryService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [employee_repository_service_1.EmployeeRepositoryService])
], EmployeeReadQueryService);
exports.EmployeeReadQueryService = EmployeeReadQueryService;
//# sourceMappingURL=employee-read-query.service.js.map