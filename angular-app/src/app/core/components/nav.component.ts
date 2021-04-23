import { Component } from '@angular/core';

@Component( {
  selector: 'app-nav',
  template: `
    <nav class="menu">
      <p class="menu-label">Azure Cognitive Services</p>
      <ul class="menu-list">
        <a routerLink="/products" routerLinkActive="router-link-active">
          <span>Cognitive Services</span>
        </a>
        <!-- <a routerLink="/speech" routerLinkActive="router-link-active">
          <span>Speech</span>
        </a> -->
        <a routerLink="/about" routerLinkActive="router-link-active">
          <span>About</span>
        </a>
      </ul>
    </nav>
  `,
} )
export class NavComponent { }
