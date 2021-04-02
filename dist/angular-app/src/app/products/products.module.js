"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsModule = void 0;
const common_1 = require("@angular/common");
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const shared_module_1 = require("../shared/shared.module");
const product_list_component_1 = require("./product-list.component");
const products_component_1 = require("./products.component");
const routes = [
    {
        path: '',
        component: products_component_1.ProductsComponent,
    },
];
let ProductsModule = class ProductsModule {
};
ProductsModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, router_1.RouterModule.forChild(routes), shared_module_1.SharedModule],
        exports: [router_1.RouterModule, products_component_1.ProductsComponent],
        declarations: [products_component_1.ProductsComponent, product_list_component_1.ProductListComponent],
    })
], ProductsModule);
exports.ProductsModule = ProductsModule;
//# sourceMappingURL=products.module.js.map