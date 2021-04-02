"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const about_component_1 = require("./about.component");
const core_1 = require("./core");
exports.routes = [
    { path: '', pathMatch: 'full', redirectTo: 'products' },
    {
        path: 'products',
        loadChildren: () => Promise.resolve().then(() => require('./products/products.module')).then((m) => m.ProductsModule),
    },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: '**', component: core_1.NotFoundComponent },
];
//# sourceMappingURL=router.js.map