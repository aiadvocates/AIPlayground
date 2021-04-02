"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsComponent = void 0;
const core_1 = require("@angular/core");
let ProductsComponent = class ProductsComponent {
    constructor(productService) {
        this.productService = productService;
        this.products$ = productService.entities$;
    }
    ngOnInit() {
        this.getProducts();
    }
    getProducts() {
        this.productService.getAll();
    }
};
ProductsComponent = __decorate([
    core_1.Component({
        selector: 'app-products',
        template: `
    <div class="content-container">
      <app-list-header
        title="Products"
        (refresh)="getProducts()"
      ></app-list-header>
      <div class="columns is-multiline is-variable">
        <div class="column is-8" *ngIf="products$ | async as products">
          <app-product-list [products]="products"></app-product-list>
        </div>
      </div>
    </div>
  `,
    })
], ProductsComponent);
exports.ProductsComponent = ProductsComponent;
//# sourceMappingURL=products.component.js.map