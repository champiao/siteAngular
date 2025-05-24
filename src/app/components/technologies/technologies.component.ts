import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Technology {
  name: string;
  category: 'backend' | 'frontend' | 'devops' | 'cloud';
  icon: string;
  level: number;
  isImage?: boolean;
}

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="technologies" class="technologies section">
      <div class="container">
        <h2 class="section-title neon-text">Tecnologias</h2>
        <p class="section-subtitle">Stack tecnológica e ferramentas que utilizo</p>

        <div class="tech-categories">
          <div class="tech-category" *ngFor="let category of categories">
            <h3 class="category-title">{{ getCategoryTitle(category) }}</h3>
            <div class="tech-grid">
              <div class="tech-card glass-card" *ngFor="let tech of getTechnologiesByCategory(category)">
                <div class="tech-icon">
                  <i [class]="tech.icon"></i>
                </div>
                <h4>{{ tech.name }}</h4>
                <div class="skill-level">
                  <div class="skill-bar" [style.width.%]="tech.level"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .technologies {
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.9), var(--primary-bg));
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

    .tech-categories {
      display: flex;
      flex-direction: column;
      gap: 4rem;
    }

    .category-title {
      font-size: 1.8rem;
      margin-bottom: 2rem;
      color: var(--neon-blue);
    }

    .tech-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
    }

    .tech-card {
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }

    .tech-icon {
      font-size: 2.5rem;
      color: var(--neon-blue);
    }

    .go-svg {
      display: block;
      margin: 0 auto;
      filter: drop-shadow(0 0 8px var(--neon-blue-glow));
    }

    .tech-card h4 {
      font-size: 1.2rem;
      color: var(--text-white);
      text-align: center;
    }

    .skill-level {
      width: 100%;
      height: 6px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 3px;
      overflow: hidden;
    }

    .skill-bar {
      height: 100%;
      background: var(--neon-blue);
      border-radius: 3px;
      transition: width 1s ease-in-out;
      box-shadow: 0 0 10px var(--neon-blue-glow);
    }

    @media (max-width: 768px) {
      .tech-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class TechnologiesComponent {
  categories: ('backend' | 'frontend' | 'devops' | 'cloud')[] = ['backend', 'frontend', 'devops', 'cloud'];

  technologies: Technology[] = [
    // Backend
    // { name: 'Golang', category: 'backend', icon: 'fas fa-code', level: 90 },
    { name: 'Golang', category: 'backend', icon: 'fa-brands fa-golang', level: 90 },
    { name: 'Node.js', category: 'backend', icon: 'fab fa-node-js', level: 85 },
    { name: 'Python', category: 'backend', icon: 'fab fa-python', level: 80 },
    { name: 'PostgreSQL', category: 'backend', icon: 'fas fa-database', level: 85 },
    { name: 'MongoDB', category: 'backend', icon: 'fas fa-database', level: 80 },

    // Frontend
    { name: 'Angular', category: 'frontend', icon: 'fab fa-angular', level: 90 },
    { name: 'TypeScript', category: 'frontend', icon: 'fab fa-js', level: 90 },
    { name: 'HTML5', category: 'frontend', icon: 'fab fa-html5', level: 95 },
    { name: 'CSS3/SCSS', category: 'frontend', icon: 'fab fa-css3-alt', level: 90 },
    { name: 'RxJS', category: 'frontend', icon: 'fas fa-code', level: 85 },

    // DevOps
    { name: 'Docker', category: 'devops', icon: 'fab fa-docker', level: 90 },
    { name: 'Kubernetes', category: 'devops', icon: 'fas fa-cube', level: 85 },
    { name: 'Jenkins', category: 'devops', icon: 'fas fa-cogs', level: 85 },
    { name: 'Terraform', category: 'devops', icon: 'fas fa-code-branch', level: 80 },
    { name: 'Git', category: 'devops', icon: 'fab fa-git-alt', level: 90 },

    // Cloud
    { name: 'AWS', category: 'cloud', icon: 'fas fa-cloud', level: 85 },
    { name: 'Azure', category: 'cloud', icon: 'fas fa-cloud', level: 80 },
    { name: 'GCP', category: 'cloud', icon: 'fas fa-cloud', level: 75 },
    { name: 'OCI', category: 'cloud', icon: 'fas fa-cloud', level: 85 },
    { name: 'Digital Ocean', category: 'cloud', icon: 'fas fa-cloud', level: 85 },
    { name: 'CI/CD', category: 'cloud', icon: 'fas fa-sync', level: 90 }
  ];

  getCategoryTitle(category: string): string {
    const titles = {
      backend: 'Backend Development',
      frontend: 'Frontend Development',
      devops: 'DevOps & Tools',
      cloud: 'Cloud & Infrastructure'
    };
    return titles[category as keyof typeof titles];
  }

  getTechnologiesByCategory(category: string): Technology[] {
    return this.technologies.filter(tech => tech.category === category);
  }
} 