import { Component } from '@angular/core';
import { HeroCardComponent } from './sections/hero-card/hero-card.component';
import { ThreePillarsComponent } from './sections/three-pillars/three-pillars.component';
import { FeaturedResearch } from './sections/featured-research/featured-research';
import { RecentWritings } from './sections/recent-writings/recent-writings';
import { Projects } from './sections/projects/projects';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  imports: [Projects, HeroCardComponent, ThreePillarsComponent, FeaturedResearch, RecentWritings],
})
export class LandingPage { }
