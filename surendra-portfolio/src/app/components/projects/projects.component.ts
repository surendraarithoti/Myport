import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projectList = [
    {
      title: 'CVS Health Portal Modernization',
      description: 'Led frontend modernization for CVS web apps, migrating from AngularJS to Angular 12+, enabling micro frontends and monorepo architecture.',
      technologies: 'Angular, NgRx, Node.js, Firebase',
      link: ''
    },
    {
      title: 'E2E Testing Framework',
      description: 'Developed and integrated Cypress and Cucumber-based testing for multiple teams to support TDD and BDD practices.',
      technologies: 'Cypress, Cucumber, Jasmine, Karma',
      link: ''
    },
    {
      title: 'Responsive Ionic App',
      description: 'Built a performant cross-platform mobile application using Angular and Ionic, optimized for smooth animations and responsiveness.',
      technologies: 'Angular, Ionic, RxJS',
      link: ''
    }
  ];
}
