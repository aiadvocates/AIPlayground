"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundComponent = void 0;
const core_1 = require("@angular/core");
let NotFoundComponent = class NotFoundComponent {
};
NotFoundComponent = __decorate([
    core_1.Component({
        selector: 'app-not-found',
        template: `
    <div class="content-container">
      <div class="content-title-group not-found">
        <i class="fas fa-exclamation-triangle" aria-hidden="true"></i> &nbsp;
        <span class="title">These aren't the bits you're looking for</span>
      </div>
    </div>
  `,
    })
], NotFoundComponent);
exports.NotFoundComponent = NotFoundComponent;
//# sourceMappingURL=not-found.component.js.map