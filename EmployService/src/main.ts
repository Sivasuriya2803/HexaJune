import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { provideHttpClient } from '@angular/common/http';
import { App } from './app/app';
 
bootstrapApplication(App, {
  ...appConfig, // ✅ Spread your app-level config
  providers: [
    ...appConfig.providers,     // 🧠 Spread existing providers from appConfig
    provideHttpClient()         // ✅ Add additional providers like HTTP
  ]
});