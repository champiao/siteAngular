import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { FooterComponent } from './components/footer/footer.component';
import { SocialFloatComponent } from './components/social-float/social-float.component';
//import { ChatbotComponent } from './components/chatbot/chatbot.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    ServicesComponent,
    TechnologiesComponent,
    CertificationsComponent,
    SocialFloatComponent,
    FooterComponent,
   // ChatbotComponent
  ],
  template: `
    <app-header></app-header>
    <app-hero></app-hero>
    <app-services></app-services>
    <app-technologies></app-technologies>
    <app-certifications></app-certifications>
    <app-social-float></app-social-float>
    <!-- <app-chatbot></app-chatbot> -->
    <app-footer></app-footer>
  `
})
export class MainPageComponent {}
