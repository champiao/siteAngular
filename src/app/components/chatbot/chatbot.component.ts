import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface ChatMessage {
  type: 'user' | 'bot';
  content: string;
}

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  template: `
    <div class="chatbot-container">
      <div class="chatbot-header" (click)="toggleChat()">
        <h3>Chatbot</h3>
        <i class="fas" [class.fa-chevron-down]="!isOpen" [class.fa-chevron-up]="isOpen"></i>
      </div>
      
      <div class="chatbot-body" [class.open]="isOpen">
        <div class="messages" #messageContainer>
          <div *ngFor="let message of messages" 
               class="message" 
               [class.user-message]="message.type === 'user'"
               [class.bot-message]="message.type === 'bot'">
            {{ message.content }}
          </div>
          
          <div *ngIf="loading" class="loading-animation">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
        </div>

        <form (ngSubmit)="sendMessage()" class="input-container">
          <input 
            type="text" 
            [(ngModel)]="userInput" 
            name="userInput"
            placeholder="Digite sua mensagem..."
            [disabled]="loading"
          >
          <button type="submit" [disabled]="!userInput.trim() || loading">
            <i class="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </div>
  `,
  styles: [`
    .chatbot-container {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      width: 350px;
      background: var(--primary-bg);
      border-radius: 12px;
      box-shadow: 0 0 20px rgba(0, 243, 255, 0.2);
      border: 1px solid var(--neon-blue);
      z-index: 1000;
      overflow: hidden;
    }

    .chatbot-header {
      background: var(--neon-blue);
      color: var(--primary-bg);
      padding: 1rem;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: background-color 0.3s;
    }

    .chatbot-header:hover {
      background: var(--neon-blue-glow);
    }

    .chatbot-header h3 {
      margin: 0;
      font-size: 1.2rem;
    }

    .chatbot-body {
      height: 0;
      transition: height 0.3s ease-in-out;
      overflow: hidden;
    }

    .chatbot-body.open {
      height: 400px;
      display: flex;
      flex-direction: column;
    }

    .messages {
      flex: 1;
      overflow-y: auto;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .message {
      max-width: 80%;
      padding: 0.8rem 1rem;
      border-radius: 12px;
      font-size: 0.95rem;
      line-height: 1.4;
    }

    .user-message {
      align-self: flex-end;
      background: var(--neon-blue);
      color: var(--primary-bg);
    }

    .bot-message {
      align-self: flex-start;
      background: rgba(255, 255, 255, 0.1);
      color: var(--text-white);
    }

    .input-container {
      padding: 1rem;
      display: flex;
      gap: 0.5rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    input {
      flex: 1;
      padding: 0.8rem;
      border: 1px solid var(--neon-blue);
      border-radius: 20px;
      background: rgba(255, 255, 255, 0.05);
      color: var(--text-white);
      font-size: 0.95rem;
    }

    input:focus {
      outline: none;
      box-shadow: 0 0 10px var(--neon-blue-glow);
    }

    button {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: none;
      background: var(--neon-blue);
      color: var(--primary-bg);
      cursor: pointer;
      transition: all 0.3s;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    button:hover:not(:disabled) {
      background: var(--neon-blue-glow);
      transform: scale(1.05);
    }

    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .loading-animation {
      display: flex;
      gap: 0.5rem;
      padding: 1rem;
      justify-content: center;
    }

    .dot {
      width: 8px;
      height: 8px;
      background: var(--neon-blue);
      border-radius: 50%;
      animation: bounce 1.4s infinite ease-in-out;
    }

    .dot:nth-child(1) { animation-delay: -0.32s; }
    .dot:nth-child(2) { animation-delay: -0.16s; }

    @keyframes bounce {
      0%, 80%, 100% { transform: scale(0); }
      40% { transform: scale(1); }
    }

    @media (max-width: 768px) {
      .chatbot-container {
        width: calc(100% - 2rem);
        bottom: 1rem;
        right: 1rem;
      }
    }
  `]
})
export class ChatbotComponent {
  isOpen = false;
  messages: ChatMessage[] = [];
  userInput = '';
  loading = false;

  constructor(private http: HttpClient) {}

  toggleChat() {
    this.isOpen = !this.isOpen;
  }

  async sendMessage() {
    if (!this.userInput.trim() || this.loading) return;

    const userMessage = this.userInput.trim();
    this.messages.push({ type: 'user', content: userMessage });
    this.userInput = '';
    this.loading = true;

    try {
      const response = await fetch('https://localhost:4243/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          prompt: userMessage
        })
      });

      if (!response.ok) {
        throw new Error('Erro na requisição');
      }

      const data = await response.json();
      this.messages.push({ type: 'bot', content: data.response });

    } catch (error) {
      console.error('Erro:', error);
      this.messages.push({ 
        type: 'bot', 
        content: 'Desculpe, ocorreu um erro ao processar sua mensagem. Por favor, tente novamente.' 
      });
    } finally {
      this.loading = false;
    }
  }
} 