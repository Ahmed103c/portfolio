import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './sections/contact/contact.component';

export const routes: Routes = [
    {
        path:'',
        component:AppComponent,
        children:[
            {path :'contact',component:ContactComponent},
        ]
    }
];
