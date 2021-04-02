"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalComponent = void 0;
const core_1 = require("@angular/core");
let ModalComponent = class ModalComponent {
    constructor() {
        this.isOpen = false;
        this.handleYes = new core_1.EventEmitter();
        this.handleNo = new core_1.EventEmitter();
        this.onNo = () => {
            this.handleNo.emit();
        };
        this.onYes = () => {
            this.handleYes.emit();
        };
    }
    ngOnInit() { }
};
__decorate([
    core_1.Input()
], ModalComponent.prototype, "message", void 0);
__decorate([
    core_1.Input()
], ModalComponent.prototype, "isOpen", void 0);
__decorate([
    core_1.Output()
], ModalComponent.prototype, "handleYes", void 0);
__decorate([
    core_1.Output()
], ModalComponent.prototype, "handleNo", void 0);
ModalComponent = __decorate([
    core_1.Component({
        selector: 'app-modal',
        template: `
    <div class="modal" [ngClass]="{ 'is-active': this.isOpen }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Confirm</p>
        </header>
        <section class="modal-card-body">
          {{message}}
        </section>
        <footer class="modal-card-foot">
          <button class="button modal-no" (click)="onNo()">No</button>
          <button class="button is-primary modal-yes" (click)="onYes()">Yes</button>
        </footer>
      </div>
    </div>
  `
    })
], ModalComponent);
exports.ModalComponent = ModalComponent;
//# sourceMappingURL=modal.component.js.map