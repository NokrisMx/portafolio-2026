import { Component, input } from '@angular/core';
import { Proyecto } from '../../../core/interfaces/portfolio-interface';

@Component({
  selector: 'app-card-project-component',
  imports: [],
  templateUrl: './card-project-component.html',
})
export class CardProjectComponent {
  proyectos = input.required<Proyecto>();
}
