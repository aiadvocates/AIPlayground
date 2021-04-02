"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppStoreModule = void 0;
const core_1 = require("@angular/core");
const effects_1 = require("@ngrx/effects");
const store_1 = require("@ngrx/store");
const data_1 = require("@ngrx/data");
const config_1 = require("./config");
const entity_metadata_1 = require("./entity-metadata");
let AppStoreModule = class AppStoreModule {
};
AppStoreModule = __decorate([
    core_1.NgModule({
        imports: [
            store_1.StoreModule.forRoot({}),
            effects_1.EffectsModule.forRoot([]),
            data_1.EntityDataModule.forRoot(entity_metadata_1.entityConfig)
        ],
        providers: [
            { provide: data_1.DefaultDataServiceConfig, useValue: config_1.defaultDataServiceConfig }
        ]
    })
], AppStoreModule);
exports.AppStoreModule = AppStoreModule;
//# sourceMappingURL=store.module.js.map