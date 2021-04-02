"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.externalModules = void 0;
const store_devtools_1 = require("@ngrx/store-devtools");
/**
 * Put dev specific code here, and prod specific code in index.prod.ts
 * https://ngrx.io/guide/store-devtools/recipes/exclude
 */
exports.externalModules = [
    store_devtools_1.StoreDevtoolsModule.instrument({
        maxAge: 25
    })
];
//# sourceMappingURL=index.js.map