import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  template: `
    <section id="contato" class="contato section">
      <div class="container">
        <!-- <h2 class="section-title neon-text">Contato</h2> -->
        <form [formGroup]="form" (ngSubmit)="onSubmit()" class="contact-form glass-card">
          <div>
            <label>Nome</label>
            <input formControlName="nome" type="text" placeholder="Seu nome" />
            <div *ngIf="form.get('nome')?.invalid && form.get('nome')?.touched" class="error">Nome obrigatório</div>
          </div>
          <div>
            <label>Email</label>
            <input formControlName="email" type="email" placeholder="Seu email" />
            <div *ngIf="form.get('email')?.invalid && form.get('email')?.touched" class="error">Email válido obrigatório</div>
          </div>
          <div>
            <label>Mensagem</label>
            <textarea formControlName="mensagem" rows="5" placeholder="Sua mensagem"></textarea>
            <div *ngIf="form.get('mensagem')?.invalid && form.get('mensagem')?.touched" class="error">Mensagem obrigatória</div>
          </div>
          <button type="submit" [disabled]="form.invalid || loading">
            {{ loading ? 'Enviando...' : 'Enviar' }}
          </button>
          <div *ngIf="success" class="success">Mensagem enviada com sucesso!</div>
          <div *ngIf="error" class="error">Erro ao enviar. Tente novamente.</div>
        </form>
      </div>
    </section>
  `,
  styles: [`
    .contato.section {
      background: linear-gradient(to bottom, rgba(0,0,0,0.95), var(--primary-bg));
    }
    .contact-form {
      max-width: 500px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    .contact-form label {
      color: var(--neon-blue);
      font-weight: 500;
      margin-bottom: 0.3rem;
      display: block;
    }
    .contact-form input, .contact-form textarea {
      width: 100%;
      padding: 0.8rem 1rem;
      border-radius: 8px;
      border: 1px solid var(--neon-blue);
      background: var(--primary-bg);
      color: var(--text-white);
      font-size: 1rem;
      margin-bottom: 0.3rem;
      outline: none;
      transition: border 0.2s;
    }
    .contact-form input:focus, .contact-form textarea:focus {
      border: 1.5px solid var(--neon-blue);
      box-shadow: 0 0 8px var(--neon-blue-glow);
    }
    .contact-form button {
      background: var(--neon-blue);
      color: var(--primary-bg);
      border: none;
      border-radius: 25px;
      padding: 1rem 2rem;
      font-weight: bold;
      font-size: 1.1rem;
      cursor: pointer;
      transition: background 0.2s, box-shadow 0.2s;
      box-shadow: 0 0 15px var(--neon-blue-glow);
    }
    .contact-form button:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    .error {
      color: #ff4d4f;
      font-size: 0.95rem;
    }
    .success {
      color: #00ffae;
      font-size: 1rem;
      margin-top: 0.5rem;
    }
  `]
})
export class ContatoComponent {
  private fb = inject(FormBuilder);
  form = this.fb.group({
    nome: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    mensagem: ['', Validators.required]
  });
  loading = false;
  success = false;
  error = false;

  constructor( private http: HttpClient) {}

  onSubmit() {
    if (this.form.invalid) return;
    this.loading = true;
    this.success = false;
    this.error = false;
    this.http.post('/api/contact', this.form.value).subscribe({
      next: () => {
        this.success = true;
        this.form.reset();
        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      }
    });
  }
}
