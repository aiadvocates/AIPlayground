"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultDataServiceConfig = void 0;
const environment_1 = require("./../../environments/environment");
const root = environment_1.environment.API || 'api';
exports.defaultDataServiceConfig = {
    root,
    entityHttpResourceUrls: {
        Product: {
            // You must specify the root as part of the resource URL.
            entityResourceUrl: `${root}/products/`,
            collectionResourceUrl: `${root}/products/`,
        },
    },
};
//# sourceMappingURL=config.js.map