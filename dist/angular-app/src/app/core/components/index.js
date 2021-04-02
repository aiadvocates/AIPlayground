"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.declarations = void 0;
__exportStar(require("./header-bar.component"), exports);
__exportStar(require("./header-bar-brand.component"), exports);
__exportStar(require("./nav.component"), exports);
__exportStar(require("./not-found.component"), exports);
const header_bar_brand_component_1 = require("./header-bar-brand.component");
const header_bar_component_1 = require("./header-bar.component");
const nav_component_1 = require("./nav.component");
const not_found_component_1 = require("./not-found.component");
exports.declarations = [
    nav_component_1.NavComponent,
    header_bar_component_1.HeaderBarComponent,
    header_bar_brand_component_1.HeaderBarBrandComponent,
    not_found_component_1.NotFoundComponent,
];
//# sourceMappingURL=index.js.map