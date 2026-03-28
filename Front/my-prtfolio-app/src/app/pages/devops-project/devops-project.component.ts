import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-devops-project',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './devops-project.component.html',
  styleUrl: './devops-project.component.css',
})
export class DevopsProjectComponent {}
