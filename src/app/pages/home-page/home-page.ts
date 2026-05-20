import { Component, inject } from '@angular/core';
import { HeroSection } from '@sections/hero-section/hero-section';
import { ProjectsSection } from '@sections/projects-section/projects-section';
import { ExperienceSection } from '@sections/experience-section/experience-section';
import { SkillsSection } from '@sections/skills-section/skills-section';
import { EducationSection } from '@sections/education-section/education-section';
import { PortfolioService } from '../../core/services/portfolio-service';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-home-page',
  imports: [HeroSection, ProjectsSection, ExperienceSection, SkillsSection, EducationSection],
  templateUrl: './home-page.html',
})
export class HomePage {
  productService = inject(PortfolioService);

  productResource = rxResource({
    stream: () => this.productService.getPortfolio(),
  });
}
