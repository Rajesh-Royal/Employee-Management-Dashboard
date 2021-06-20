"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalaryStructureModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const salary_structure_repository_service_1 = require("./salary-structure-repository.service");
const salary_structure_resolver_1 = require("./salary-structure.resolver");
const salary_structure_schema_1 = require("./salary-structure.schema");
const create_salary_structure_mutation_service_1 = require("./service/create-salary-structure-mutation.service");
let SalaryStructureModule = class SalaryStructureModule {
};
SalaryStructureModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: 'SalaryStructureType',
                    schema: salary_structure_schema_1.SalaryStructureSchema,
                    collection: "SalaryStructure"
                }
            ])
        ],
        providers: [
            salary_structure_resolver_1.SalaryStructureResolver,
            salary_structure_repository_service_1.SalaryStructureRepositoryService,
            create_salary_structure_mutation_service_1.CreateSalaryMetaKeyMutationService
        ],
        exports: [
            mongoose_1.MongooseModule,
            salary_structure_repository_service_1.SalaryStructureRepositoryService
        ]
    })
], SalaryStructureModule);
exports.SalaryStructureModule = SalaryStructureModule;
//# sourceMappingURL=salary-structure.module.js.map