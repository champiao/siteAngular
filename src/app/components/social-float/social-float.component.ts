import { Component } from '@angular/core';

@Component({
  selector: 'app-social-float',
  standalone: true,
  template: `
    <div class="social-float">
      <a href="https://wa.me/+5512988844068" target="_blank" class="social-btn whatsapp" aria-label="WhatsApp">
        <i class="fab fa-whatsapp"></i>
      </a>
      <a href="https://github.com/champiao" target="_blank" class="social-btn github" aria-label="GitHub">
        <i class="fab fa-github"></i>
      </a>
      <a href="https://linkedin.com/in/champiao" target="_blank" class="social-btn linkedin" aria-label="LinkedIn">
        <i class="fab fa-linkedin"></i>
      </a>
    </div>
  `,
  styles: [`
    .social-float {
      position: fixed;
      bottom: 2.5rem;
      right: 2.5rem;
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
      z-index: 2000;
    }
    .social-btn {
      width: 56px;
      height: 56px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: var(--primary-bg);
      border: 2.5px solid var(--neon-blue);
      color: var(--neon-blue);
      font-size: 2rem;
      box-shadow: 0 0 18px 2px var(--neon-blue-glow);
      transition: background 0.2s, color 0.2s, box-shadow 0.2s, transform 0.2s;
      cursor: pointer;
      animation: neonGlow 2s infinite;
    }
    .social-btn:hover {
      background: var(--neon-blue);
      color: var(--primary-bg);
      box-shadow: 0 0 32px 6px var(--neon-blue-glow);
      transform: translateY(-4px) scale(1.08);
    }
    .social-btn.whatsapp {
      color: #25d366;
      border-color: #25d366;
      box-shadow: 0 0 18px 2px #25d36655;
    }
    .social-btn.whatsapp:hover {
      background: #25d366;
      color: var(--primary-bg);
      box-shadow: 0 0 32px 6px #25d36699;
    }
    .social-btn.github {
      color: var(--neon-blue);
      border-color: var(--neon-blue);
    }
    .social-btn.linkedin {
      color: #0a66c2;
      border-color: #0a66c2;
      box-shadow: 0 0 18px 2px #0a66c255;
    }
    .social-btn.linkedin:hover {
      background: #0a66c2;
      color: var(--primary-bg);
      box-shadow: 0 0 32px 6px #0a66c299;
    }
    @media (max-width: 600px) {
      .social-float {
        right: 1rem;
        bottom: 1rem;
      }
      .social-btn {
        width: 44px;
        height: 44px;
        font-size: 1.4rem;
      }
    }
  `]
})
export class SocialFloatComponent {}