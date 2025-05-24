import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  icon: string;
  link?: string;
}

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="certifications" class="certifications section">
      <div class="container">
        <h2 class="section-title neon-text">Certificações</h2>
        <p class="section-subtitle">Certificações profissionais e conquistas</p>

        <div class="certifications-grid">
          <div class="certification-card glass-card" *ngFor="let cert of certifications">
            <div class="cert-icon">
              <i [class]="cert.icon"></i>
            </div>
            <div class="cert-content">
              <h3>{{ cert.title }}</h3>
              <p class="issuer">{{ cert.issuer }}</p>
              <p class="date">{{ cert.date }}</p>
              <p class="credential" *ngIf="cert.credentialId">
                Credencial: {{ cert.credentialId }}
              </p>
              <a *ngIf="cert.link" [href]="cert.link" target="_blank" class="verify-link">
                Verificar Certificação
                <i class="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .certifications {
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

    .certifications-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .certification-card {
      display: flex;
      gap: 1.5rem;
      padding: 2rem;
      transition: transform var(--transition-speed);
    }

    .certification-card:hover {
      transform: translateY(-5px);
    }

    .cert-icon {
      font-size: 2.5rem;
      color: var(--neon-blue);
      min-width: 60px;
      text-align: center;
    }

    .cert-content {
      flex: 1;
    }

    .cert-content h3 {
      font-size: 1.3rem;
      color: var(--text-white);
      margin-bottom: 0.5rem;
    }

    .issuer {
      color: var(--neon-blue);
      font-weight: 500;
      margin-bottom: 0.5rem;
    }

    .date {
      color: var(--text-gray);
      font-size: 0.9rem;
      margin-bottom: 0.5rem;
    }

    .credential {
      color: var(--text-gray);
      font-size: 0.9rem;
      font-family: monospace;
      margin-bottom: 1rem;
    }

    .verify-link {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--neon-blue);
      text-decoration: none;
      font-size: 0.9rem;
      transition: color var(--transition-speed);
    }

    .verify-link:hover {
      color: var(--text-white);
    }

    .verify-link i {
      font-size: 0.8rem;
    }

    @media (max-width: 768px) {
      .certifications-grid {
        grid-template-columns: 1fr;
      }

      .certification-card {
        flex-direction: column;
        text-align: center;
      }

      .cert-icon {
        margin: 0 auto;
      }
    }
  `]
})
export class CertificationsComponent {
  certifications: Certification[] = [
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: 'Dezembro 2023',
      credentialId: 'AWS-123456',
      icon: 'fab fa-aws',
      link: 'https://aws.amazon.com/certification/'
    },
    {
      title: 'Certified Kubernetes Administrator (CKA)',
      issuer: 'Cloud Native Computing Foundation',
      date: 'Novembro 2023',
      credentialId: 'CKA-789012',
      icon: 'fas fa-cube',
      link: 'https://www.cncf.io/certification/cka/'
    },
    {
      title: 'Google Cloud Professional Cloud Architect',
      issuer: 'Google Cloud',
      date: 'Outubro 2023',
      credentialId: 'GCP-345678',
      icon: 'fab fa-google',
      link: 'https://cloud.google.com/certification'
    },
    {
      title: 'Azure DevOps Engineer Expert',
      issuer: 'Microsoft',
      date: 'Setembro 2023',
      credentialId: 'AZ-901234',
      icon: 'fab fa-microsoft',
      link: 'https://www.microsoft.com/certification'
    },
    {
      title: 'Red Hat Certified Engineer (RHCE)',
      issuer: 'Red Hat',
      date: 'Agosto 2023',
      credentialId: 'RH-567890',
      icon: 'fab fa-redhat',
      link: 'https://www.redhat.com/certification'
    },
    {
      title: 'Certified Jenkins Engineer',
      issuer: 'CloudBees',
      date: 'Julho 2023',
      credentialId: 'CJE-123789',
      icon: 'fab fa-jenkins',
      link: 'https://www.cloudbees.com/certification'
    }
  ];
} 