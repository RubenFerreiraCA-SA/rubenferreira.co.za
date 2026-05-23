import { Routes } from '@angular/router';
import { LandingPage } from './landing-page/landing-page.component';
import { AboutPage } from './about-page/about.component';

export const routes: Routes = [
  { path: 'home', component: LandingPage },
  { path: 'about', component: AboutPage },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
