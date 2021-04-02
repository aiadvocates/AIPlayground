"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardContentComponent = void 0;
const core_1 = require("@angular/core");
let CardContentComponent = class CardContentComponent {
    ngOnInit() { }
};
__decorate([
    core_1.Input()
], CardContentComponent.prototype, "name", void 0);
__decorate([
    core_1.Input()
], CardContentComponent.prototype, "description", void 0);
CardContentComponent = __decorate([
    core_1.Component({
        selector: 'app-card-content',
        template: `
    <div class="card-content">
      <div class="content">
        <div class="name">{{ name }}</div>
        <div class="description">{{ description }}</div>
      </div>
    </div>
  `
    })
], CardContentComponent);
exports.CardContentComponent = CardContentComponent;
//# sourceMappingURL=card-content.component.js.map