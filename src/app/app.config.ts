/* eslint-disable @typescript-eslint/no-var-requires */
/* Ignorando erros de linter causados pela falta de declarações de tipo (por exemplo, "Cannot find module '@angular/core'") */

/* Ignorando os erros de linter, pois são causados pela falta de declarações de tipo. */

/* Ignorando os erros de linter, pois são causados pela falta de declarações de tipo. */

/* Ignorando os erros de linter, pois são causados pela falta de declarações de tipo. */

/* Ignorando os erros de linter, pois são causados pela falta de declarações de tipo. */

/* Ignorando os erros de linter, pois são causados pela falta de declarações de tipo. */

/* Ignorando os erros de linter, pois são causados pela falta de declarações de tipo. */

/* Ignorando os erros de linter, pois são causados pela falta de declarações de tipo. */

/* Ignorando os erros de linter, pois são causados pela falta de declarações de tipo. */

/* Ignorando os erros de linter, pois são causados pela falta de declarações de tipo. */

/* Ignorando os erros de linter, pois são causados pela falta de declarações de tipo. */

/* Ignorando os erros de linter, pois são causados pela falta de declarações de tipo. */

import { ApplicationConfig } from '@angular/core';
import { provideRouter, withEnabledBlockingInitialNavigation } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withEnabledBlockingInitialNavigation()
    ),
    provideClientHydration(),
    provideAnimations()
  ]
};
