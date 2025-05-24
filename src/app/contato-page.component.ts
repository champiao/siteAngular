import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ContatoComponent } from './components/contato/contato.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-contato-page',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    ContatoComponent,
  ],
  template: `
    <app-header></app-header>
    <app-contato></app-contato>
  `
})
export class ContatoPageComponent {} 