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
exports.SalaryStructureRepositoryService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const salary_structure_type_1 = require("../../shared/salary-structure.type");
let SalaryStructureRepositoryService = class SalaryStructureRepositoryService {
    constructor(SalaryStructureModel) {
        this.SalaryStructureModel = SalaryStructureModel;
        this.Logger = new common_1.Logger();
    }
    createSalaryField(operation) {
        return new this.SalaryStructureModel(Object.assign(Object.assign(Object.assign({}, (operation.salary_meta_key !== undefined && { salary_meta_key: operation.salary_meta_key })), (operation.type !== undefined && { type: operation.type })), (operation.disabled !== undefined && { disabled: operation.disabled }))).save();
    }
};
SalaryStructureRepositoryService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('SalaryStructureType')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], SalaryStructureRepositoryService);
exports.SalaryStructureRepositoryService = SalaryStructureRepositoryService;
//# sourceMappingURL=salary-structure-repository.service.js.map