"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const employee_repository_service_1 = require("./employee-repository.service");
const employee_create_mutation_service_1 = require("./services/employee-create.mutation.service");
const employee_resolvers_1 = require("./employee.resolvers");
const employee_schema_1 = require("./employee.schema");
const employee_list_read_query_service_1 = require("./services/employee-list-read.query.service");
const employee_read_query_service_1 = require("./services/employee-read-query.service");
let EmployeeModule = class EmployeeModule {
};
EmployeeModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: 'EmployeeType',
                    schema: employee_schema_1.EmployeeSchema,
                    collection: "employee"
                },
            ]),
        ],
        providers: [
            employee_resolvers_1.EmployeeResolvers,
            employee_repository_service_1.EmployeeRepositoryService,
            employee_create_mutation_service_1.EmployeeCreateMutationService,
            employee_list_read_query_service_1.EmployeeListReadQueryService,
            employee_read_query_service_1.EmployeeReadQueryService
        ],
        exports: [
            mongoose_1.MongooseModule,
            employee_repository_service_1.EmployeeRepositoryService
        ]
    })
], EmployeeModule);
exports.EmployeeModule = EmployeeModule;
//# sourceMappingURL=employee.module.js.map