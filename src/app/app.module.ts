import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoleSelectionComponent } from './components/role-selection/role-selection.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { TestPageComponent } from './components/test-page/test-page.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { UserFormComponent } from './components/admin/user-form/user-form.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomeComponent } from './components/front-office/home/home.component';
import { HeaderComponent } from './components/front-office/header/header.component';
import { FooterComponent } from './components/front-office/footer/footer.component';
import { AdminLayoutComponent } from './components/back-office/admin-layout/admin-layout.component';
import { NavbarComponent } from './components/back-office/navbar/navbar.component';
import { SidebarComponent } from './components/back-office/sidebar/sidebar.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings, RECAPTCHA_SETTINGS } from 'ng-recaptcha';
import { SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FaceRegistrationComponent } from './components/face-registration/face-registration.component';
import { FaceLoginComponent } from './components/face-login/face-login.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    RoleSelectionComponent,
    RegisterComponent,
    LoginComponent,
    TestPageComponent,
    AdminDashboardComponent,
    UserFormComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AdminLayoutComponent,
    NavbarComponent,
    SidebarComponent,
    UserProfileComponent,
    EditProfileComponent,
    FaceRegistrationComponent,
    FaceLoginComponent,
    VerifyEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    SocialLoginModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: '6Ld-Xh0rAAAAAJqqNwbp7PeKvIT8FmNJLxjrKhy9',
      } as RecaptchaSettings,
    },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '470754618426-de96ju0sj35bd9e2eogm9qb1tgf5b4oh.apps.googleusercontent.com',
         {scopes: 'openid email profile'}
            )
          }
        ],
        onError: (error) => {
          console.error('AppModule: Social Auth Initialization Error:', error);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
 
}