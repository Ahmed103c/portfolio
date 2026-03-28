import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-devops-showcase',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './devops-showcase.component.html',
  styleUrl: './devops-showcase.component.css',
})
export class DevopsShowcaseComponent {}
