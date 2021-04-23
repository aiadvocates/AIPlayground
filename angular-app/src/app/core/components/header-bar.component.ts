import { Component } from '@angular/core';

@Component({
  selector: 'app-header-bar',
  template: `
    <header>
      <nav
        class="navbar"
        role="navigation"
        aria-label="main navigation"
      >
        <app-header-bar-brand></app-header-bar-brand>
      </nav>
    </header>
  `,
})
export class HeaderBarComponent {}
