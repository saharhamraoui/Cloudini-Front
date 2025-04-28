import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleSelectionComponent } from './components/role-selection/role-selection.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/front-office/home/home.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { UserFormComponent } from './components/admin/user-form/user-form.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AdminLayoutComponent } from './components/back-office/admin-layout/admin-layout.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { FaceRegistrationComponent } from './components/face-registration/face-registration.component';
import { FaceLoginComponent } from './components/face-login/face-login.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'role-selection', component: RoleSelectionComponent },
  { path: 'register/:role', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'test-dashboard', component: AdminDashboardComponent },
  { path: 'face-login', component: FaceLoginComponent },
  { path: 'register-face', component: FaceRegistrationComponent },
  { path: 'verify-email', component: VerifyEmailComponent },

  { 
    path: 'profile', 
    component: UserProfileComponent,
    canActivate: [AuthGuard] 
  },
  { 
    path: 'profile/edit',  
    component: EditProfileComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard, AdminGuard], // Décommenté
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { 
        path: 'dashboard', 
        component: AdminDashboardComponent 
      },
      { 
        path: 'user-form', 
        component: UserFormComponent 
      }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }