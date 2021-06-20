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
exports.CreateSalaryMetaKeyMutationService = void 0;
const common_1 = require("@nestjs/common");
const salary_structure_type_1 = require("../../../shared/salary-structure.type");
const salary_structure_repository_service_1 = require("../salary-structure-repository.service");
const create_salary_structure_mutation_model_1 = require("./create-salary-structure-mutation.model");
let CreateSalaryMetaKeyMutationService = class CreateSalaryMetaKeyMutationService {
    constructor(salaryStructureRepositoryService) {
        this.salaryStructureRepositoryService = salaryStructureRepositoryService;
        this.Logger = new common_1.Logger();
    }
    async serve(operation) {
        const createSalaryMetaKey = await this.salaryStructureRepositoryService.createSalaryField(operation);
        if (createSalaryMetaKey === null || createSalaryMetaKey === void 0 ? void 0 : createSalaryMetaKey._id) {
            return new create_salary_structure_mutation_model_1.CreateSalaryMetaKeyMutationModel(createSalaryMetaKey);
        }
        else {
            return "Cannot Create Salary Meta Key Field";
        }
    }
};
CreateSalaryMetaKeyMutationService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [salary_structure_repository_service_1.SalaryStructureRepositoryService])
], CreateSalaryMetaKeyMutationService);
exports.CreateSalaryMetaKeyMutationService = CreateSalaryMetaKeyMutationService;
//# sourceMappingURL=create-salary-structure-mutation.service.js.map