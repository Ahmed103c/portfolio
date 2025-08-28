import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { projects } from './data/projects_data';
import { CommonModule } from '@angular/common';
import { Project } from './model/Project';
@Component({
  selector: 'app-new-template',
  imports: [CommonModule],
  templateUrl: './new-template.component.html',
  styleUrl: './new-template.component.css'
})
export class NewTemplateComponent implements AfterViewInit {
  @ViewChild('videoPlayer', { static: false }) videoPlayer!: ElementRef;
  projects_data : Project[] = projects;
  // project_types = ['web-app', 'simulation', 'up-coming'];
  progressColor = 'blue';
  current_project_type = 'web-app';
  current_project_name = '';
  current_project_video_link = '';
  current_projects : Project[] = [];
 
  setCurrentType(type: string) {
    this.current_project_type = type; 
    console.log("Project type : ",this.current_project_type);
    this.current_projects = projects.filter(p => p.type === this.current_project_type);
    this.current_project_name = this.current_projects[0]?.name || '';
    this.current_project_video_link = this.current_projects[0]?.video_link[0] || '';
    this.updateCurrentProject(this.current_project_name);
  }
  updateCurrentProject(project_name: string) {
    this.current_project_name = project_name; 
    let project  = this.current_projects.find(p => p.name === this.current_project_name) || this.current_projects[0];
    this.current_project_video_link = project.video_link[0] || '';
    console.log("Project name : ",this.current_project_name);
  }





  ngOnInit(): void {
    this.animateProgress();
    this.setCurrentType(this.current_project_type);
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

  progress = 0;
  duration = 0;
  // Quand la vidéo charge ses métadonnées (durée dispo)
  setDuration(video: HTMLVideoElement) {
    this.duration = video.duration;
  }

  // À chaque update du temps courant
  updateProgress(video: HTMLVideoElement) {
    if (this.duration > 0) {
      this.progress = (video.currentTime / this.duration) * 100;
    }
  }


  animateProgress() {
    setInterval(() => {
      if (this.progress < 100) {
        this.progress += 1;
      } else {
        this.progress = 0; // recommence l’animation
      }
    }, 10000); // 100 ms → incrémente de 1%
  }

}
