import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import {provideRouter, withComponentInputBinding} from '@angular/router';

import { routes } from './app.routes';
import {provideClientHydration, withEventReplay, withI18nSupport} from '@angular/platform-browser';
import {provideHttpClient, withFetch} from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideClientHydration(withI18nSupport(), withEventReplay()),
    provideHttpClient(withFetch()),
    provideRouter(routes, withComponentInputBinding())
  ]
};
