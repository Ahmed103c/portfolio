import { Component } from '@angular/core';

@Component({
  selector: 'app-new-template',
  imports: [],
  templateUrl: './new-template.component.html',
  styleUrl: './new-template.component.css'
})
export class NewTemplateComponent {
  
  openId: number | null = null;
  toggleDescription(id: number): void {
    if (this.openId === id) {
      this.openId = null; // Close if the same icon is clicked
    } else {
      this.openId = id; // Open the clicked icon
    }
  }
}
