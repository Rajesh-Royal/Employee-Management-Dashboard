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
exports.SalaryRepositoryService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let SalaryRepositoryService = class SalaryRepositoryService {
    constructor(SalaryTypeModel, EmployeeTypeModel) {
        this.SalaryTypeModel = SalaryTypeModel;
        this.EmployeeTypeModel = EmployeeTypeModel;
        this.Logger = new common_1.Logger;
    }
    createSalary(operation) {
        return new this.SalaryTypeModel(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (operation.employeeId !== undefined && { employeeId: operation.employeeId })), ((operation.da !== null || operation.da !== null) && { da: operation.da })), ((operation.pa !== undefined || operation.pa !== null) && { pa: operation.pa })), ((operation.hra !== undefined || operation.hra !== null) && { hra: operation.hra })), ((operation.pt !== undefined || operation.pt !== null) && { pt: operation.pt })), ((operation.epf !== undefined || operation.epf !== null) && { epf: operation.epf })), ((operation.basic !== undefined || operation.basic !== null) && { basic: operation.basic }))).save();
    }
    findSalary(employeeId) {
        return this.SalaryTypeModel.findOne({ employeeId: employeeId }).populate("employeeId").exec();
    }
    async updateSalary(operation) {
        const salaryUpdate = await this.SalaryTypeModel.updateOne({ employeeId: operation.employeeId }, {
            $set: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (operation.employeeId !== undefined && { employeeId: operation.employeeId })), (operation.da !== undefined && { da: operation.da })), (operation.pa !== undefined && { pa: operation.pa })), (operation.hra !== undefined && { hra: operation.hra })), (operation.pt !== undefined && { pt: operation.pt })), (operation.epf !== undefined && { epf: operation.epf })), (operation.basic !== undefined && { basic: operation.basic }))
        }, {
            upsert: true
        });
        this.updateSalaryIdofEmployee(operation.employeeId);
        return salaryUpdate;
    }
    async updateSalaryIdofEmployee(employeeId) {
        return await this.SalaryTypeModel.findOne({ employeeId: employeeId }).then(async (salary) => {
            this.Logger.log(`Found employee to update salary id: ${salary.employeeId}`);
            await this.EmployeeTypeModel.findOneAndUpdate({ _id: employeeId }, {
                $set: {
                    salary: salary._id
                }
            }).then((emp) => {
                this.Logger.log(`employee salary Id updated = EmpId: ${emp._id} SalId: ${emp.salary}`);
            });
        });
    }
};
SalaryRepositoryService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('SalaryType')),
    __param(1, mongoose_1.InjectModel('EmployeeType')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], SalaryRepositoryService);
exports.SalaryRepositoryService = SalaryRepositoryService;
//# sourceMappingURL=salary-repository.service.js.map