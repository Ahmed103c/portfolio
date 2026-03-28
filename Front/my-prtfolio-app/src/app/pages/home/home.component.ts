import { AfterViewInit, Component, NgZone, OnInit } from '@angular/core';
import { PresentationComponent } from '../../sections/presentation/presentation.component';
import { ExperienceComponent } from '../../sections/experience/experience.component';
import { NewTemplateComponent } from '../../sections/new-template/new-template.component';
import { StudiesComponent } from '../../sections/studies/studies.component';
import { ContactComponent } from '../../sections/contact/contact.component';
import { DevopsShowcaseComponent } from '../../sections/devops-showcase/devops-showcase.component';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PresentationComponent,
    ExperienceComponent,
    NewTemplateComponent,
    StudiesComponent,
    ContactComponent,
    DevopsShowcaseComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }

  ngAfterViewInit(): void {
    this.ngZone.runOutsideAngular(() => {
      const panels = document.querySelectorAll('.panel');

      panels.forEach((panel) => {
        gsap.from(panel, {
          opacity: 0,
          y: 100,
          duration: 2,
          scrollTrigger: {
            trigger: panel,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        });
      });

      ScrollTrigger.addEventListener('refresh', () => AOS.refresh());
    });
  }
}
