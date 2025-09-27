import { AfterViewInit, Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { PresentationComponent } from './sections/presentation/presentation.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { EducationComponent } from './sections/education/education.component';
import { ContactComponent } from './sections/contact/contact.component';
import AOS from 'aos'; // Importation correcte de AOS
import 'aos/dist/aos.css'; // Importation des styles AOS
import { NewTemplateComponent } from './sections/new-template/new-template.component';
import { StudiesComponent } from './sections/studies/studies.component';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-root',
  standalone: true, // Optionnel si tu utilises Angular 14+ avec des composants autonomes
  imports: [
    RouterOutlet,
    NavbarComponent,
    PresentationComponent,
    ProjectsComponent,
    ExperienceComponent,
    EducationComponent,
    ContactComponent,
    NewTemplateComponent,
    StudiesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Assure-toi de bien mettre 'styleUrls' au lieu de 'styleUrl'
})
// export class AppComponent implements OnInit {
export class AppComponent  implements AfterViewInit{
  title = 'my-prtfolio-app';

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    this.ngZone.runOutsideAngular(() => {
      const panels = document.querySelectorAll('.panel');

      panels.forEach((panel, i) => {
        gsap.from(panel, {
          opacity: 0,
          y: 100,
          duration: 2,
          scrollTrigger: {
            trigger: panel,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
            // markers: true // remove once it works
          }
        });
      });
    });
  }


}
