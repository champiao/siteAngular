import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page.component';
import { ContatoPageComponent } from './contato-page.component';

export const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'contato', component: ContatoPageComponent },
];
