"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const mongoose_1 = require("@nestjs/mongoose");
const schedule_1 = require("@nestjs/schedule");
const config_1 = require("@nestjs/config");
const employee_module_1 = require("./employee/employee.module");
const salary_module_1 = require("./salary/salary.module");
const productionMongoURI = "mongodb+srv://rajesh:<pwd>@cluster0.iwlez.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const localMongoURI = "mongodb://localhost:27017/employeeManagement";
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            graphql_1.GraphQLModule.forRoot({
                autoSchemaFile: 'schema.gql',
                playground: true,
            }),
            config_1.ConfigModule.forRoot({ envFilePath: `${process.env.NODE_ENV}.env` }),
            mongoose_1.MongooseModule.forRoot(localMongoURI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
                useCreateIndex: true
            }),
            schedule_1.ScheduleModule.forRoot(),
            employee_module_1.EmployeeModule,
            salary_module_1.SalaryModule
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map