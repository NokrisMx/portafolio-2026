import { Component, input } from '@angular/core';
import { About } from '../../core/interfaces/portfolio-interface';

@Component({
  selector: 'app-hero-section',
  imports: [],
  templateUrl: './hero-section.html',
})
export class HeroSection {
  about = input.required<About>();
}
