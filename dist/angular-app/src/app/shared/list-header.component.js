"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListHeaderComponent = void 0;
const core_1 = require("@angular/core");
let ListHeaderComponent = class ListHeaderComponent {
    constructor() {
        this.refresh = new core_1.EventEmitter();
    }
    ngOnInit() { }
    handleRefresh() {
        this.refresh.emit();
    }
};
__decorate([
    core_1.Input()
], ListHeaderComponent.prototype, "title", void 0);
__decorate([
    core_1.Output()
], ListHeaderComponent.prototype, "refresh", void 0);
ListHeaderComponent = __decorate([
    core_1.Component({
        selector: 'app-list-header',
        template: `
    <div class="content-title-group">
      <a router-link="/">
        <h2 class="title">{{ title }}</h2>
      </a>
      <button
        class="button refresh-button"
        (click)="handleRefresh()"
        aria-label="refresh"
      >
        <i class="fas fa-sync" aria-hidden="true"></i>
      </button>
    </div>
  `,
    })
], ListHeaderComponent);
exports.ListHeaderComponent = ListHeaderComponent;
//# sourceMappingURL=list-header.component.js.map