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
exports.EmployeeRepositoryService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let EmployeeRepositoryService = class EmployeeRepositoryService {
    constructor(EmployeeTypeModel) {
        this.EmployeeTypeModel = EmployeeTypeModel;
    }
    async createEmployee(operation) {
        return await new this.EmployeeTypeModel(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (operation.firstName !== undefined && { firstName: operation.firstName })), (operation.lastName !== undefined && { lastName: operation.lastName })), (operation.email !== undefined && { email: operation.email })), (operation.city !== undefined && { city: operation.city })), (operation.ctc !== undefined && { ctc: operation.ctc })), (operation.salary !== undefined && { salary: operation.salary }))).save();
    }
    async getAllEmployees() {
        return await this.EmployeeTypeModel.find().populate("salary").exec();
    }
    async readAnEmployee(operation) {
        return await this.EmployeeTypeModel.findOne({ _id: operation.employeeId }).populate("salary").exec();
    }
};
EmployeeRepositoryService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('EmployeeType')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], EmployeeRepositoryService);
exports.EmployeeRepositoryService = EmployeeRepositoryService;
//# sourceMappingURL=employee-repository.service.js.map