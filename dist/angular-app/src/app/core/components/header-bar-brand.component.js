"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderBarBrandComponent = void 0;
const core_1 = require("@angular/core");
let HeaderBarBrandComponent = class HeaderBarBrandComponent {
};
HeaderBarBrandComponent = __decorate([
    core_1.Component({
        selector: 'app-header-bar-brand',
        template: `
    <div class="navbar-brand">
      <a
        class="navbar-item"
        href="https://angular.io/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fab js-logo fa-angular fa-2x" aria-hidden="true"></i>
      </a>
      <a class="navbar-item nav-home" router-link="/">
        <span class="brand-first">MY</span>
        <span class="brand-second">SHOPPING</span>
        <span class="brand-third">LIST</span>
      </a>
    </div>
  `,
    })
], HeaderBarBrandComponent);
exports.HeaderBarBrandComponent = HeaderBarBrandComponent;
//# sourceMappingURL=header-bar-brand.component.js.map