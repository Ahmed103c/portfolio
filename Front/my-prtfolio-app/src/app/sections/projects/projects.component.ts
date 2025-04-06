import { CommonModule } from '@angular/common';
import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { projects } from './data/projects_data';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects_data = projects;

  current_project_index = 0;
  current_img_index = 0;
  project_name = this.projects_data[this.current_project_index].name;
  project_description =
    this.projects_data[this.current_project_index].description;
  project_photo =
    this.projects_data[this.current_project_index].photo[
      this.current_img_index
    ];

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
    this.current_img_index = 0;
    this.project_photo =
      project[this.current_project_index].photo[this.current_img_index];
  }

  previousImg() {
    let photo_length =
      this.projects_data[this.current_project_index].photo.length;
    this.current_img_index =
      (this.current_img_index - 1 + photo_length) % photo_length;
    this.project_photo =
      this.projects_data[this.current_project_index].photo[
        this.current_img_index
      ];
  }
  nextImg() {
    let photo_length =
      this.projects_data[this.current_project_index].photo.length;
    this.current_img_index = (this.current_img_index + 1) % photo_length;
    this.project_photo =
      this.projects_data[this.current_project_index].photo[
        this.current_img_index
      ];
  }
}
