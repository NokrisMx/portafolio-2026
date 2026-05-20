import { Component, inject, input } from '@angular/core';
import { CardExperienceComponent } from '@shared/components/card-experience-component/card-experience-component';
import { Experiencia } from '../../core/interfaces/portfolio-interface';

@Component({
  selector: 'app-experience-section',
  imports: [CardExperienceComponent],
  templateUrl: './experience-section.html',
})
export class ExperienceSection {
  experiencia = input<Experiencia[]>();
}
