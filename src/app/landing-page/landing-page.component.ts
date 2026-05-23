import { Component } from '@angular/core';
import { HeroCardComponent } from './sections/hero-card/hero-card.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  imports: [HeroCardComponent],
})
export class LandingPage {}
