import { Component, input } from '@angular/core';
import { HugeiconsIconComponent, IconSvgObject } from '@hugeicons/angular';
import {
  HtmlFile01Icon,
  CssFile01Icon,
  JavaScriptIcon,
  SqlIcon,
  GitMergeIcon,
  BootstrapIcon,
  TailwindcssIcon,
  FigmaIcon,
  TriangleIcon,
  Rocket01Icon,
  SmartPhone02Icon,
  DatabaseIcon,
  Settings01Icon,
} from '@hugeicons/core-free-icons';
import { Habilidades } from './../../core/interfaces/portfolio-interface';

@Component({
  selector: 'app-skills-section',
  imports: [HugeiconsIconComponent],
  templateUrl: './skills-section.html',
  standalone: true,
})
export class SkillsSection {
  habilidades = input.required<Habilidades[]>();

  private iconMap: Record<string, IconSvgObject> = {
    HtmlFile01Icon: HtmlFile01Icon,
    CssFile01Icon: CssFile01Icon,
    JavaScriptIcon: JavaScriptIcon,
    SqlIcon: SqlIcon,
    GitMergeIcon: GitMergeIcon,
    BootstrapIcon: BootstrapIcon,
    TailwindcssIcon: TailwindcssIcon,
    FigmaIcon: FigmaIcon,
    TriangleIcon: TriangleIcon,
    Rocket01Icon: Rocket01Icon,
    SmartPhone02Icon: SmartPhone02Icon,
    DatabaseIcon: DatabaseIcon,
  };

  getIcon(icono: string): IconSvgObject {
    return this.iconMap[icono] ?? Settings01Icon;
  }
}
