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
exports.SalaryStructureModel = void 0;
const graphql_1 = require("@nestjs/graphql");
const salary_structure_meta_key_type_enum_1 = require("../../shared/salary-structure-meta-key-type.enum");
const salary_structure_type_1 = require("../../shared/salary-structure.type");
graphql_1.registerEnumType(salary_structure_meta_key_type_enum_1.SalaryStructureMetaKeyTypeEnum, {
    name: "SalaryStructureMetaKeyTypeEnum"
});
let SalaryStructureModel = class SalaryStructureModel {
    constructor(initialValues) {
        this.salary_meta_key = undefined;
        this.type = undefined;
        this.disabled = undefined;
        this.salary_meta_key = initialValues === null || initialValues === void 0 ? void 0 : initialValues.salary_meta_key;
        this.type = initialValues === null || initialValues === void 0 ? void 0 : initialValues.type;
        this.disabled = initialValues === null || initialValues === void 0 ? void 0 : initialValues.disabled;
    }
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], SalaryStructureModel.prototype, "salary_meta_key", void 0);
__decorate([
    graphql_1.Field(() => salary_structure_meta_key_type_enum_1.SalaryStructureMetaKeyTypeEnum),
    __metadata("design:type", String)
], SalaryStructureModel.prototype, "type", void 0);
__decorate([
    graphql_1.Field(() => Boolean),
    __metadata("design:type", Boolean)
], SalaryStructureModel.prototype, "disabled", void 0);
SalaryStructureModel = __decorate([
    graphql_1.ArgsType(),
    graphql_1.ObjectType(),
    __metadata("design:paramtypes", [Object])
], SalaryStructureModel);
exports.SalaryStructureModel = SalaryStructureModel;
//# sourceMappingURL=salary-structure-model.js.map