import { Component, input } from '@angular/core';
import { CardProjectComponent } from '@shared/components/card-project-component/card-project-component';
import { Proyecto } from '../../core/interfaces/portfolio-interface';

@Component({
  selector: 'app-projects-section',
  imports: [CardProjectComponent],
  templateUrl: './projects-section.html',
})
export class ProjectsSection {
  proyectos = input.required<Proyecto[]>();
}
