import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
