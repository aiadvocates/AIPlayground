"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const platform_browser_1 = require("@angular/platform-browser");
const core_1 = require("@angular/core");
const http_1 = require("@angular/common/http");
const router_1 = require("./router");
const app_component_1 = require("./app.component");
const store_module_1 = require("./store/store.module");
const about_component_1 = require("./about.component");
const router_2 = require("@angular/router");
const build_specific_1 = require("./build-specific");
const core_2 = require("./core");
const angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
const in_memory_data_service_1 = require("./in-memory-data.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        declarations: [app_component_1.AppComponent, about_component_1.AboutComponent, core_2.declarations],
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpClientModule,
            router_2.RouterModule.forRoot(router_1.routes),
            store_module_1.AppStoreModule,
            build_specific_1.externalModules,
            angular_in_memory_web_api_1.HttpClientInMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService, {
                dataEncapsulation: false,
                delay: 300,
                passThruUnknownUrl: true,
            }),
        ],
        providers: [{ provide: in_memory_data_service_1.InMemoryDataService, useExisting: angular_in_memory_web_api_1.InMemoryDbService }],
        bootstrap: [app_component_1.AppComponent],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map