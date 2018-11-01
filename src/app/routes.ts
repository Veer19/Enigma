//Router
import { RouterModule, Routes } from '@angular/router';
//Components
import { LoginFormComponent } from './login-form/login-form.component';
import { ComicFirstComponent } from './comic-first/comic-first.component';
import { BriefingComponent } from './briefing/briefing.component';
import { Comic1Component } from './comic1/comic1.component';
import { PhoneLevelComponent } from './phone-level/phone-level.component';
import { AuthGuard} from './guard/auth.guard';
import { NavigateComponent } from './navigate/navigate.component';
import { Comic2Component } from './comic2/comic2.component';
import { ComputersComponent } from './computers/computers.component';
import { Comic3Component } from './comic3/comic3.component';
import { CompletedComponent } from './completed/completed.component';
import { FailedComponent } from './failed/failed.component';
import { AdminComponent } from './admin/admin.component';


export const appRoutes: Routes = [
    { path: 'admin', component: AdminComponent },
    { path: 'login', component: LoginFormComponent},
    { path: '', component: ComicFirstComponent, canActivate:[AuthGuard] },
    { path: 'briefing', component: BriefingComponent, canActivate:[AuthGuard] },
    { path: '1', component: Comic1Component, canActivate:[AuthGuard] },
    { path: 'phone', component: PhoneLevelComponent , canActivate:[AuthGuard] },
    { path: 'navigate', component: NavigateComponent , canActivate:[AuthGuard] },
    { path: '2', component: Comic2Component , canActivate:[AuthGuard] },
    { path: 'computers', component: ComputersComponent , canActivate:[AuthGuard] },
    { path: '3', component: Comic3Component , canActivate:[AuthGuard] },
    { path: 'completed', component: CompletedComponent , canActivate:[AuthGuard] },
    { path: 'failed', component: FailedComponent , canActivate:[AuthGuard] }    
];