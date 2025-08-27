import { Component} from '@angular/core';


@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  openId: number | null = null;
  toggleDescription(id: number): void {
    if (this.openId === id) {
      this.openId = null; // Close if the same icon is clicked
    } else {
      this.openId = id; // Open the clicked icon
    }
  }
}
