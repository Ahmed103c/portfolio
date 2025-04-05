import { CommonModule } from '@angular/common';
import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  // show = false;

  // show_projects() {
  //   this.show = !this.show;
  // }
  projects = ['Wealthwise', 'MyFilm', 'Beeim', 'Immolink', 'Evac'];
  currentIndex = 0; // Affiche Wealthwise par défaut

  nextProject() {
    this.currentIndex = (this.currentIndex + 1) % this.projects.length;
  }

  previousProject() {
    this.currentIndex =
      (this.currentIndex - 1 + this.projects.length) % this.projects.length;
  }
}
