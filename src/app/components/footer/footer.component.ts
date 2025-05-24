import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <section id="footer" class="footer section">
        <div class="container">
          <div class="footer-content">
            <div class="footer-brand">
              <h3 class="neon-text">Champiao Cloud Solutions</h3>
              <p>Transformando ideias em soluções digitais inovadoras</p>
            </div>

            <div class="footer-links">
              <div class="link-group">
                <h4>Navegação</h4>
                <ul>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#services">Serviços</a></li>
                  <li><a href="#technologies">Tecnologias</a></li>
                  <li><a href="#certifications">Certificações</a></li>
                </ul>
              </div>

              <div class="link-group">
                <h4>Contato</h4>
                <ul>
                  <li>
                    <a href="mailto:champiao&#64;champiao.com.br">
                      <i class="fas fa-envelope"></i>
                      champiao&#64;champiao.com.br
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com/in/champiao" target="_blank">
                      <i class="fab fa-linkedin"></i>
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/champiao" target="_blank">
                      <i class="fab fa-github"></i>
                      GitHub
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="footer-bottom">
            <p>&copy; {{ currentYear }} Champiao Cloud Solutions. Todos os direitos reservados.</p>
            <div class="social-links">
              <a href="https://www.linkedin.com/in/champiao/" target="_blank" class="social-link">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/champiao" target="_blank" class="social-link">
                <i class="fab fa-github"></i>
              </a>
              <a href="https://x.com/champiao" target="_blank" class="social-link">
                <i class="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  `,
  styles: [`
    .footer {
      background: rgba(0, 0, 0, 0.95);
      padding: 4rem 0 2rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    .footer-content {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 4rem;
      margin-bottom: 3rem;
    }

    .footer-brand h3 {
      font-size: 1.8rem;
      margin-bottom: 1rem;
    }

    .footer-brand p {
      color: var(--text-gray);
      max-width: 300px;
    }

    .footer-links {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
    }

    .link-group h4 {
      color: var(--text-white);
      font-size: 1.2rem;
      margin-bottom: 1.5rem;
    }

    .link-group ul {
      list-style: none;
      padding: 0;
    }

    .link-group li {
      margin-bottom: 0.8rem;
    }

    .link-group a {
      color: var(--text-gray);
      text-decoration: none;
      transition: color var(--transition-speed);
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
    }

    .link-group a:hover {
      color: var(--neon-blue);
    }

    .footer-bottom {
      padding-top: 2rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .footer-bottom p {
      color: var(--text-gray);
      font-size: 0.9rem;
    }

    .social-links {
      display: flex;
      gap: 1rem;
    }

    .social-link {
      color: var(--text-gray);
      font-size: 1.2rem;
      transition: all var(--transition-speed);
    }

    .social-link:hover {
      color: var(--neon-blue);
      transform: translateY(-3px);
    }

    @media (max-width: 768px) {
      .footer-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .footer-links {
        grid-template-columns: 1fr;
      }

      .footer-bottom {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
      }
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
} 