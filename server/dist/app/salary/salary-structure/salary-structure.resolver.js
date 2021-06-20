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
exports.SalaryStructureResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const salary_structure_model_1 = require("./salary-structure-model");
const create_salary_structure_mutation_model_1 = require("./service/create-salary-structure-mutation.model");
const create_salary_structure_mutation_service_1 = require("./service/create-salary-structure-mutation.service");
let SalaryStructureResolver = class SalaryStructureResolver {
    constructor(CreateSalaryMetaKeyMutationService) {
        this.CreateSalaryMetaKeyMutationService = CreateSalaryMetaKeyMutationService;
    }
    async CreateEmployeeSalaryStructureMetaField(_arguments) {
        const operation = new salary_structure_model_1.SalaryStructureModel(_arguments);
        return await this.CreateSalaryMetaKeyMutationService.serve(operation).then(data => data);
    }
};
__decorate([
    graphql_1.Mutation(() => create_salary_structure_mutation_model_1.CreateSalaryMetaKeyMutationModel),
    __param(0, graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [salary_structure_model_1.SalaryStructureModel]),
    __metadata("design:returntype", Promise)
], SalaryStructureResolver.prototype, "CreateEmployeeSalaryStructureMetaField", null);
SalaryStructureResolver = __decorate([
    graphql_1.Resolver(),
    __metadata("design:paramtypes", [create_salary_structure_mutation_service_1.CreateSalaryMetaKeyMutationService])
], SalaryStructureResolver);
exports.SalaryStructureResolver = SalaryStructureResolver;
//# sourceMappingURL=salary-structure.resolver.js.map