import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="neon-text">Transformando Ideias em <span class="highlight">Realidade Digital</span></h1>
            <p class="subtitle">Especialista em DevOps e Desenvolvimento Full Stack</p>
            <p class="description">
              Com mais de 5 anos de experiência em desenvolvimento e DevOps, 
              ofereço soluções tecnológicas inovadoras que impulsionam o sucesso 
              do seu negócio. Especializado em Golang, Angular e práticas modernas 
              de DevOps.
            </p>
            <div class="cta-buttons">
              <a href="/" class="cta-primary">Vamos Conversar</a>
              <a href="#services" class="cta-secondary">Nossos Serviços</a>
            </div>
          </div>
          <div class="hero-image">
            <!-- Aqui você pode adicionar uma imagem ilustrativa -->
            <div class="image-placeholder">
              <!-- <div class="neon-border"> -->
                <img src="assets/semfundoChampiaoLogo.png" alt="Hero Image" class="hero-image-img">
              <!-- </div> -->
            </div>
          </div>
        </div>
      </div>
      <div class="hero-background">
        <div class="grid-overlay"></div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      position: relative;
      padding: 6rem 0;
      overflow: hidden;
    }
    .hero-image-img {
      width: 100%;
      height: 100%;
      background-color: var(--primary-bg);
      border-radius: 20px;
      box-shadow: 0 0 20px var(--neon-blue-glow);
      object-fit: contain;
    }
    .hero-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
      position: relative;
      z-index: 2;
    }

    .hero-text {
      max-width: 600px;
    }

    h1 {
      font-size: 3.5rem;
      line-height: 1.2;
      margin-bottom: 1.5rem;
    }

    .highlight {
      color: var(--neon-blue);
      position: relative;
      display: inline-block;
    }

    .subtitle {
      font-size: 1.5rem;
      color: var(--text-gray);
      margin-bottom: 1.5rem;
    }

    .description {
      font-size: 1.1rem;
      margin-bottom: 2rem;
      color: var(--text-white);
    }

    .cta-buttons {
      display: flex;
      gap: 1rem;
    }

    .cta-primary, .cta-secondary {
      padding: 1rem 2rem;
      border-radius: 30px;
      text-decoration: none;
      font-weight: 600;
      transition: all var(--transition-speed);
    }

    .cta-primary {
      background: var(--neon-blue);
      color: var(--primary-bg);
      box-shadow: 0 0 20px var(--neon-blue-glow);
    }

    .cta-secondary {
      border: 2px solid var(--neon-blue);
      color: var(--neon-blue);
    }

    .cta-primary:hover {
      transform: translateY(-3px);
      box-shadow: 0 0 30px var(--neon-blue-glow);
    }

    .cta-secondary:hover {
      background: var(--neon-blue);
      color: var(--primary-bg);
    }

    .hero-image {
      position: relative;
    }

    .image-placeholder {
      width: 100%;
      aspect-ratio: 1;
      background: var(--card-bg);
      border-radius: 20px;
      position: relative;
      overflow: hidden;
    }

    .neon-border {
      position: absolute;
      inset: 0;
      border: 2px solid var(--neon-blue);
      border-radius: 20px;
      animation: neonGlow 2s infinite;
    }

    .hero-background {
      position: absolute;
      inset: 0;
      z-index: 1;
      background-color: var(--primary-bg);
    }

    .grid-overlay {
      position: absolute;
      inset: 0;
      background-image: 
        linear-gradient(var(--neon-blue-glow) 1px, transparent 1px),
        linear-gradient(90deg, var(--neon-blue-glow) 1px, transparent 1px);
      background-size: 50px 50px;
      opacity: 0.1;
    }

    @media (max-width: 768px) {
      .hero-content {
        grid-template-columns: 1fr;
        text-align: center;
      }

      h1 {
        font-size: 2.5rem;
      }

      .cta-buttons {
        justify-content: center;
      }

      .hero-image {
        display: none;
      }
    }
  `]
})
export class HeroComponent {} 