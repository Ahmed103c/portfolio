import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { projects } from './data/projects_data';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent implements AfterViewInit {
  @ViewChild('videoPlayer', { static: false }) videoPlayer!: ElementRef;
  projects_data = projects;

  current_project_index = 0;

  project_name = this.projects_data[this.current_project_index].name;

  project_description =
    this.projects_data[this.current_project_index].description;

  project_photo = this.projects_data[this.current_project_index].photo;

  project_link = this.projects_data[this.current_project_index].link;

  project_techno = this.projects_data[this.current_project_index].techno;

  previousProject() {
    this.current_project_index =
      (this.current_project_index - 1 + this.projects_data.length) %
      this.projects_data.length;
    this.update_project(this.projects_data);
  }

  nextProject() {
    this.current_project_index =
      (this.current_project_index + 1) % this.projects_data.length;
    this.update_project(this.projects_data);
  }

  update_project(project: any) {
    this.project_name = project[this.current_project_index].name;
    this.project_description = project[this.current_project_index].description;
    this.project_link = project[this.current_project_index].link;
    this.project_photo = project[this.current_project_index].photo;
    this.project_techno = project[this.current_project_index].techno;
  }
  ngAfterViewInit() {
    // Petite attente pour laisser Angular tout charger
    setTimeout(() => {
      const video = this.videoPlayer?.nativeElement;
      if (video) {
        video.muted = true; // encore une fois on assure
        video.autoplay = true;
        //video.load(); // recharge
        video
          .play()
          .then(() => {
            console.log('Lecture vidéo démarrée');
          })
          .catch((err: any) => {
            console.warn('Lecture bloquée :', err);
          });
      }
    }, 200); // parfois 100ms c'est trop court
  }
}
