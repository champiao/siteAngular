import { Component, ViewChild, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  animations: [
    trigger('dropdownMenu', [
      state('closed', style({ top: '-100%', opacity: 0 })),
      state('open', style({ top: '80px', opacity: 1 })),
      transition('closed <=> open', [
        animate('300ms cubic-bezier(0.4,0,0.2,1)')
      ]),
    ])
  ],
  template: `
    <header class="header">
      <div class="container">
        <nav class="nav">
          <div class="logo-area">
            <a href="#" class="logo neon-text" style="text-decoration: none;"><img src="assets/semfundoChampiaoLogo.png" alt="CCS" class="logo-img-mini"></a>
          </div>
          <div class="desktop-menu">
            <button mat-button class="menu-item" [routerLink]="['/']" fragment="home">Home</button>
            <button mat-button class="menu-item" [routerLink]="['/']" fragment="services">Serviços</button>
            <button mat-button class="menu-item" [routerLink]="['/']" fragment="technologies">Tecnologias</button>
          </div>
          <button mat-icon-button class="mobile-menu-button" *ngIf="!menuOpen" (click)="toggleMenu()">
            <mat-icon>menu</mat-icon>
          </button>
          <button mat-icon-button class="mobile-menu-button menu-close" *ngIf="menuOpen" (click)="closeMenu()">
            <mat-icon>close</mat-icon>
          </button>
        </nav>
      </div>
      <div *ngIf="menuOpen" [@dropdownMenu]="menuOpen ? 'open' : 'closed'" class="mobile-dropdown-menu">
        <div class="mobile-nav-list">
          <a class="mobile-menu-item" [routerLink]="['/']" fragment="home" (click)="closeMenu()">Home</a>
          <a class="mobile-menu-item" [routerLink]="['/']" fragment="services" (click)="closeMenu()">Serviços</a>
          <a class="mobile-menu-item" [routerLink]="['/']" fragment="technologies" (click)="closeMenu()">Tecnologias</a>
        </div>
      </div>
      <div *ngIf="menuOpen" class="mobile-menu-overlay" (click)="closeMenu()"></div>
    </header>
  `,
  styles: [`
    .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      background: rgba(0, 0, 0, 0.95);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      height: 80px;
      box-shadow: none;
      border-radius: 0;
      width: 100%;
    }
    .container {
      height: 100%;
      margin: 0 auto;
      padding: 0 1rem;
      max-width: 1200px;
      width: 100%;
      display: flex;
      align-items: center;
    }
    .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      width: 100%;
      padding: 0;
    }
    .logo-area {
      display: flex;
      align-items: center;
      height: 80px;
    }
    .logo {
      font-size: 1.5rem;
      font-weight: bold;
      letter-spacing: 1px;
      z-index: 1001;
      display: flex;
      align-items: center;
      height: 80px;
    }
    .desktop-menu {
      display: flex;
      gap: 1rem;
      align-items: center;
      z-index: 1001;
    }
    .menu-item {
      color: var(--text-white) !important;
      font-size: 1rem;
      transition: color var(--transition-speed);
      background: transparent !important;
      border-radius: 0 !important;
      box-shadow: none !important;
      min-width: unset !important;
      border-bottom: none !important;
    }
    .menu-item:hover {
      color: var(--neon-blue) !important;
      background: transparent !important;
    }
    .contact-button {
      color: var(--text-white) !important;
      border: 1px solid var(--neon-blue) !important;
      border-radius: 25px !important;
      padding: 0 1.5rem !important;
      transition: all var(--transition-speed) !important;
      background: transparent !important;
      height: 36px !important;
      line-height: 36px !important;
      min-width: unset !important;
      box-shadow: none !important;
    }
    .contact-button:hover {
      background: var(--neon-blue) !important;
      color: var(--primary-bg) !important;
      box-shadow: 0 0 15px var(--neon-blue-glow) !important;
    }
    .mobile-menu-button {
      display: none;
      color: var(--text-white) !important;
      z-index: 2100;
      background: transparent !important;
      border-radius: 0 !important;
      box-shadow: none !important;
      margin-left: 1rem;
    }
    .mobile-menu-button.menu-close {
      position: fixed;
      top: 16px;
      right: 16px;
      z-index: 2100;
      display: block;
    }
    .mobile-dropdown-menu {
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      z-index: 2000;
      background: rgba(0, 0, 0, 0.98);
      backdrop-filter: blur(10px);
      padding-top: 80px;
      box-shadow: 0 8px 32px 0 rgba(0,0,0,0.37);
      border-bottom: 1px solid rgba(255,255,255,0.1);
      width: 100vw;
      min-height: 220px;
      animation: dropdownMenuAnim 0.3s cubic-bezier(0.4,0,0.2,1);
    }
    @keyframes dropdownMenuAnim {
      from { top: -100%; opacity: 0; }
      to { top: 0; opacity: 1; }
    }
    .mobile-nav-list {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      padding: 2rem 0 1rem 0;
      background: transparent !important;
      align-items: flex-start;
    }
    .mobile-menu-item {
      color: var(--text-white) !important;
      font-size: 1.1rem !important;
      padding: 1rem 2rem !important;
      transition: all var(--transition-speed) !important;
      background: transparent !important;
      border-radius: 0 !important;
      border-bottom: none !important;
      min-width: unset !important;
      box-shadow: none !important;
      width: 100%;
      text-align: left;
    }
    .mobile-menu-item:hover {
      background: rgba(0, 243, 255, 0.1) !important;
      color: var(--neon-blue) !important;
    }
    .mobile-contact-button {
      color: var(--text-white) !important;
      border: 1px solid var(--neon-blue) !important;
      border-radius: 25px !important;
      margin: 1rem 2rem !important;
      text-align: center !important;
      transition: all var(--transition-speed) !important;
      background: transparent !important;
      min-width: unset !important;
      box-shadow: none !important;
      width: calc(100% - 4rem);
      display: block;
    }
    .mobile-contact-button:hover {
      background: var(--neon-blue) !important;
      color: var(--primary-bg) !important;
      box-shadow: 0 0 15px var(--neon-blue-glow) !important;
    }
    .mobile-menu-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.3);
      z-index: 1500;
    }
    .logo-img-mini {
      max-width: 20%;
      height: auto;
      display: block;
    }
    @media (max-width: 768px) {
      .desktop-menu {
        display: none;
      }
      .mobile-menu-button {
        display: block;
      }
    }
  `]
})
export class HeaderComponent {
  menuOpen = false;
  @ViewChild('sidenav') sidenav: any;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  closeMenu() {
    this.menuOpen = false;
  }
}