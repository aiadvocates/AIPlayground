"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductListComponent = void 0;
const core_1 = require("@angular/core");
let ProductListComponent = class ProductListComponent {
    trackByProduct(index, product) {
        return product.id;
    }
};
__decorate([
    core_1.Input()
], ProductListComponent.prototype, "products", void 0);
ProductListComponent = __decorate([
    core_1.Component({
        selector: 'app-product-list',
        template: `
    <div *ngIf="!products?.length">
      Loading data ...
    </div>
    <ul class="list">
      <li
        role="presentation"
        *ngFor="let product of products; trackBy: trackByProduct; let i = index"
      >
        <div class="card">
          <app-card-content
            [name]="product.name"
            [description]="product.description"
          ></app-card-content>
        </div>
      </li>
    </ul>
  `,
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
    })
], ProductListComponent);
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map