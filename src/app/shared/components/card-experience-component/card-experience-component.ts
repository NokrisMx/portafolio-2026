import { Component, input } from '@angular/core';
import { Experiencia } from '../../../core/interfaces/portfolio-interface';

@Component({
  selector: 'app-card-experience-component',
  imports: [],
  templateUrl: './card-experience-component.html',
})
export class CardExperienceComponent {
  experiencia = input.required<Experiencia>();
}
