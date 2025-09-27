import { AfterViewInit, Component, OnInit} from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent  {
  openId: number | null = null;
  toggleDescription(id: number): void {
    if (this.openId === id) {
      this.openId = null; // Close if the same icon is clicked
    } else {
      this.openId = id; // Open the clicked icon
    }
  }
  // ngOnInit() {
  //   gsap.to('.work-title', {
  //   scrollTrigger: {
  //     trigger: '.work-title',
  //     start: 'top center',
  //     markers: true
      
  //   } ,
  //   x: 100,
  //   duration: 5,
  //   });
  // }
  // ngAfterViewInit(): void {
  // gsap.to('.work-title', {
  //   scrollTrigger: {
  //     trigger: '.work-title',
  //     start: 'top center',
  //     end: 'bottom 80%',
  //     markers: true,
  //   },
  //   x: 50,
  //   duration: 2,
  // })};
}
