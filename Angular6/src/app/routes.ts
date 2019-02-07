import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './user/profile/profile.component';
import { LoginComponent } from './user/login/login.component';
import { AuthGuardService } from './shared/auth-guard.service';

export const appRoutes: Routes = [
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: '', component:HomeComponent
    },
    {
        path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] 
    },
    {
        path:'login',component:LoginComponent
    }
];