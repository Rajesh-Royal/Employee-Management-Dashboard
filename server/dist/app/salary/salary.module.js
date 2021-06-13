"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalaryModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const employee_module_1 = require("../employee/employee.module");
const salary_repository_service_1 = require("./salary-repository.service");
const salary_resolver_1 = require("./salary.resolver");
const salary_schema_1 = require("./salary.schema");
const salary_read_query_service_1 = require("./service/salary-read.query.service");
const salary_update_mutation_service_1 = require("./service/salary-update.mutation.service");
let SalaryModule = class SalaryModule {
};
SalaryModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: 'SalaryType',
                    schema: salary_schema_1.SalarySchema,
                    collection: "salary"
                },
            ]),
            common_1.forwardRef(() => employee_module_1.EmployeeModule)
        ],
        providers: [
            salary_resolver_1.SalaryResolvers,
            salary_repository_service_1.SalaryRepositoryService,
            salary_update_mutation_service_1.EmployeeSalaryUpdateMutationService,
            salary_read_query_service_1.EmployeeSalaryReadQueryService
        ],
        exports: [
            mongoose_1.MongooseModule,
            salary_repository_service_1.SalaryRepositoryService,
        ]
    })
], SalaryModule);
exports.SalaryModule = SalaryModule;
//# sourceMappingURL=salary.module.js.map