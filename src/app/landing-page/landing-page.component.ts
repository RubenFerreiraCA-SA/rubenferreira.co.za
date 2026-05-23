import { Component } from '@angular/core';
import { HeroCardComponent } from './sections/hero-card/hero-card.component';
import { ThreePillarsComponent } from './sections/three-pillars/three-pillars.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  imports: [HeroCardComponent, ThreePillarsComponent],
})
export class LandingPage {}
