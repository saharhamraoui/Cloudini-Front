import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

=======
>>>>>>> blogfront
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { FrontofficeRoutingModule } from './frontoffice/frontoffice-routing.module';
import { FournisseurListComponent } from './backoffice/components/fournisseur-list/fournisseur-list.component';
import { FournisseurDetailComponent } from './backoffice/components/fournisseur-detail/fournisseur-detail.component';
import { MedicamentListComponent } from './backoffice/components/medicament-list/medicament-list.component';
import { CommandeListComponent } from './backoffice/components/commande-list/commande-list.component';
import { GestionCommandesComponent } from './backoffice/components/gestion-commandes/gestion-commandes.component';
import { StockComponent } from './backoffice/components/stock/stock.component';
import { GestionfournisseurComponent } from './backoffice/components/gestionfournisseur/gestionfournisseur.component';
import { GestionmedsComponent } from './backoffice/components/gestionmeds/gestionmeds.component';
import { StatusFilterPipe } from './pipes/status-filter.pipe';
import { SuivreCommandeComponent } from './backoffice/components/suivre-commande/suivre-commande.component';
import { BackofficeComponent } from './backoffice/backoffice.component';
import { RoleSelectionComponent } from './components/role-selection/role-selection.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { TestPageComponent } from './components/test-page/test-page.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
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
import { FaceRegistrationComponent } from './components/face-registration/face-registration.component';
import { FaceLoginComponent } from './components/face-login/face-login.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

import { RecaptchaModule, RecaptchaFormsModule, RecaptchaSettings, RECAPTCHA_SETTINGS } from 'ng-recaptcha';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AuthInterceptor } from './interceptors/auth.interceptor';

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
    ReactiveFormsModule,
    ClipboardModule,
    FormsModule,
    BrowserAnimationsModule,
        ToastrModule.forRoot(),
        MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule
  ],
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
              { scopes: 'openid email profile' }
            )
          }
        ],
        onError: (error) => {
          console.error('AppModule: Social Auth Initialization Error:', error);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
