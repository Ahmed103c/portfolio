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
    const video = this.videoPlayer?.nativeElement;
     video.autoplay = true;
  }

  video = this.videoPlayer?.nativeElement;
  ngOnInit(): void {
    this.animateProgress();
    this.setCurrentType(this.current_project_type);
  }
  
  ngAfterViewInit() {
  const video = this.videoPlayer?.nativeElement;
  if (!video) return;

  video.muted = true;
  video.autoplay = false; 

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        video
          .play()
          .then(() => console.log('Lecture vidéo démarrée'))
          .catch((err: any) => console.warn('Lecture bloquée :', err));
      } else {
        video.pause();
      }
    });
  }, { threshold: 0.5 });

  observer.observe(video);
  if (video.getBoundingClientRect().top < window.innerHeight &&
      video.getBoundingClientRect().bottom > 0) {
    video.play().catch((err: any) => console.warn('Lecture bloquée (init):', err));
  }
}

  progress = 0;
  duration = 0;

  setDuration(video: HTMLVideoElement) {
    this.duration = video.duration;
  }

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
        this.progress = 0; 
      }
    }, 10000); 
  }

}
