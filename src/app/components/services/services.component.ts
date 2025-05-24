import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="services" class="services section">
      <div class="container">
        <h2 class="section-title neon-text">Nossos Serviços</h2>
        <p class="section-subtitle">Soluções tecnológicas completas para seu negócio</p>
        
        <div class="services-grid">
          <div class="service-card glass-card" *ngFor="let service of services">
            <div class="service-icon">
              <i [class]="service.icon"></i>
            </div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .services {
      background: linear-gradient(to bottom, var(--primary-bg), rgba(0, 0, 0, 0.9));
    }

    .section-title {
      font-size: 2.5rem;
      text-align: center;
      margin-bottom: 1rem;
    }

    .section-subtitle {
      text-align: center;
      color: var(--text-gray);
      font-size: 1.2rem;
      margin-bottom: 4rem;
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .service-card {
      text-align: center;
      padding: 2.5rem;
      transition: transform var(--transition-speed);
    }

    .service-card:hover {
      transform: translateY(-10px);
    }

    .service-icon {
      font-size: 2.5rem;
      color: var(--neon-blue);
      margin-bottom: 1.5rem;
    }

    .service-card h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: var(--text-white);
    }

    .service-card p {
      color: var(--text-gray);
      line-height: 1.6;
    }

    @media (max-width: 768px) {
      .services-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ServicesComponent {
  services: Service[] = [
    {
      title: 'DevOps & CI/CD',
      description: 'Implementação de pipelines de integração e entrega contínua, automação de processos e infraestrutura como código.',
      icon: 'fas fa-code-branch'
    },
    {
      title: 'Desenvolvimento Backend',
      description: 'Desenvolvimento de APIs robustas e escaláveis utilizando Golang, com foco em performance e boas práticas.',
      icon: 'fas fa-server'
    },
    {
      title: 'Desenvolvimento Frontend',
      description: 'Criação de interfaces modernas e responsivas com Angular, garantindo a melhor experiência do usuário.',
      icon: 'fas fa-laptop-code'
    },
    {
      title: 'Cloud Solutions',
      description: 'Arquitetura e implementação de soluções em nuvem, otimização de custos e performance.',
      icon: 'fas fa-cloud'
    },
    {
      title: 'Consultoria Técnica',
      description: 'Análise e otimização de processos de desenvolvimento, melhores práticas e arquitetura de software.',
      icon: 'fas fa-lightbulb'
    },
    {
      title: 'Monitoramento & Observabilidade',
      description: 'Implementação de sistemas de monitoramento, logging e rastreamento para garantir a saúde da aplicação.',
      icon: 'fas fa-chart-line'
    }
  ];
} 