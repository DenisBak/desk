import {
  ApplicationConfig,
} from "@angular/core";
import { provideClientHydration } from "@angular/platform-browser";
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideRouter(routes) ,
    
    provideClientHydration(), provideAnimationsAsync(),
  ],
};
