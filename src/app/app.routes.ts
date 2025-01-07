import { Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { TreeComponent } from './tree/tree.component';
import { SocialsComponent } from './socials/socials.component';
import { GeneralComponent} from "./socials/general/general.component";

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'socials', component: SocialsComponent },
    { path: 'tree', component: TreeComponent },
    { path: 'general', component: GeneralComponent },
];
