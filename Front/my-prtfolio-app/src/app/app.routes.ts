import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DevopsProjectComponent } from './pages/devops-project/devops-project.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'devops-project',
        component: DevopsProjectComponent,
    },
];
