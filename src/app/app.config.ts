import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './interceptors/auth.interceptor';
import { provideState, provideStore } from '@ngrx/store';
import { counterReducer } from './store/counter/counter.reducer';
import { appStore } from './store/app.store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideStore(),
    provideState(appStore.counter),
    provideState(appStore.contacts),
    provideState(appStore.toast),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
