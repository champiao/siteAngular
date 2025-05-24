import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <header class="header">
      <div class="container">
        <nav class="nav">
          <div><a href="#" class="logo neon-text" style="text-decoration: none;">Champiao Cloud Solutions</a></div>
          <ul class="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#technologies">Tecnologias</a></li>
            <!-- <li><a href="#certifications">Certificações</a></li> -->
            <li><a routerLink="/contato" class="contact-btn">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `,
  styles: [`
    .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      background: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 0;
    }
    .logo {
      font-size: 1.5rem;
      font-weight: bold;
      letter-spacing: 1px;
    }
    .nav-links {
      display: flex;
      gap: 2rem;
      list-style: none;
    }
    .nav-links a {
      color: var(--text-white);
      text-decoration: none;
      font-size: 1rem;
      transition: color var(--transition-speed);
      position: relative;
    }
    .nav-links a::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--neon-blue);
      transition: width var(--transition-speed);
    }
    .nav-links a:hover {
      color: var(--neon-blue);
    }
    .nav-links a:hover::after {
      width: 100%;
    }
    .contact-btn {
      padding: 0.5rem 1.5rem;
      border: 1px solid var(--neon-blue);
      border-radius: 25px;
      transition: all var(--transition-speed);
    }
    .contact-btn:hover {
      background: var(--neon-blue);
      color: var(--primary-bg) !important;
      box-shadow: 0 0 15px var(--neon-blue-glow);
    }
    @media (max-width: 768px) {
      .nav-links {
        display: none;
      }
    }
  `]
})
export class HeaderComponent {}