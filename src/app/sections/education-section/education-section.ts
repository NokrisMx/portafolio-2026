import { Educacion } from './../../core/interfaces/portfolio-interface';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-education-section',
  imports: [],
  templateUrl: './education-section.html',
})
export class EducationSection {
  educacion = input.required<Educacion[]>();
}
