"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonFooterComponent = void 0;
const core_1 = require("@angular/core");
let ButtonFooterComponent = class ButtonFooterComponent {
    constructor() {
        this.clicked = new core_1.EventEmitter();
    }
    ngOnInit() { }
    handleClick() {
        this.clicked.emit(this.item);
    }
};
__decorate([
    core_1.Input()
], ButtonFooterComponent.prototype, "label", void 0);
__decorate([
    core_1.Input()
], ButtonFooterComponent.prototype, "className", void 0);
__decorate([
    core_1.Input()
], ButtonFooterComponent.prototype, "iconClasses", void 0);
__decorate([
    core_1.Input()
], ButtonFooterComponent.prototype, "item", void 0);
__decorate([
    core_1.Input()
], ButtonFooterComponent.prototype, "dataId", void 0);
__decorate([
    core_1.Output()
], ButtonFooterComponent.prototype, "clicked", void 0);
ButtonFooterComponent = __decorate([
    core_1.Component({
        selector: 'app-button-footer',
        template: `
    <button
      class="link"
      [ngClass]="className"
      [attr.aria-label]="label"
      tabindex="0"
      [attr.data-id]="item.id"
      (click)="handleClick()"
    >
      <i [ngClass]="iconClasses"></i> <span>{{ label }}</span>
    </button>
  `
    })
], ButtonFooterComponent);
exports.ButtonFooterComponent = ButtonFooterComponent;
//# sourceMappingURL=button-footer.component.js.map