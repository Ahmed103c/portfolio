import { Component, OnInit } from '@angular/core';
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
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Assure-toi de bien mettre 'styleUrls' au lieu de 'styleUrl'
})
// export class AppComponent implements OnInit {
export class AppComponent  {
  title = 'my-prtfolio-app';

  // ngOnInit() {
  //   AOS.init({
  //     duration: 1200, // Durée de l'animation
  //     easing: 'ease-in-out', // Easing de l'animation
  //     once: false, // L'animation se déclenche une seule fois lors du premier passage
  //     mirror: true, // L'animation est réversible lorsque l'utilisateur fait défiler la page vers le bas
  //     offset: 200, // L'animation commence lorsqu'on est à 200px de l'élément
  //     //delay: 200, // Délai avant que l'animation commence
  //   });
  // }
  // ngAfterViewChecked() {
  //   AOS.refresh(); // Rafraîchit les animations au fur et à mesure du défilement
  // }
}
