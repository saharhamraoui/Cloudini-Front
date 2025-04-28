import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AuthResponse } from '../../models/auth-response.model';
import { SocialAuthService, SocialUser, GoogleLoginProvider } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string = '';
  isLoading: boolean = false;
  googleLoading: boolean = false;
  captchaResponse: string | null = null;
  forgotPasswordEmail: string = '';
  showRoleSelectionModal: boolean = false;
  selectedRole: string | null = null;
  googleUser: { email: string; firstName: string; lastName: string } | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private socialAuthService: SocialAuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      recaptcha: ['']
    });
  }

  ngOnInit(): void {
    console.log('LoginComponent: Initializing SocialAuthService');
    this.socialAuthService.initState.subscribe({
      next: () => {
        console.log('LoginComponent: Google provider initialized successfully');
      },
      error: (error) => {
        console.error('LoginComponent: Error initializing Google provider:', error);
        this.errorMessage = 'Failed to initialize Google Sign-In. Please try again later.';
      }
    });

    this.socialAuthService.authState.subscribe({
      next: (user: SocialUser) => {
        console.log('LoginComponent: authState triggered with user:', user);
        if (user && user.idToken) {
          console.log('LoginComponent: Google Sign-In User:', user);
          this.googleLoading = true;
          this.authService.loginWithGoogle(user.idToken).subscribe({
            next: (response: any) => {
              if (response.status === 'role_selection_required') {
                this.googleUser = {
                  email: response.email,
                  firstName: response.firstName,
                  lastName: response.lastName
                };
                this.showRoleSelectionModal = true;
                const modal = document.getElementById('roleSelectionModal');
                if (modal) {
                  // @ts-ignore
                  new bootstrap.Modal(modal).show();
                }
                this.googleLoading = false;
              } else {
                this.handleLoginSuccess(response);
              }
            },
            error: (error) => this.handleLoginError(error, true)
          });
        } else {
          console.log('LoginComponent: No user received from Google Sign-In');
          this.googleLoading = false;
        }
      },
      error: (error) => this.handleGoogleError(error)
    });
  }

  confirmRoleSelection(): void {
    if (!this.selectedRole || !this.googleUser) return;
    
    this.authService.registerWithGoogle(
      this.googleUser.email,
      this.googleUser.firstName,
      this.googleUser.lastName,
      this.selectedRole
    ).subscribe({
      next: (response) => {
        // Handle successful registration
        this.handleLoginSuccess(response);
      },
      error: (error) => {
        // Show error message
        this.errorMessage = 'Role selection failed';
      }
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid && this.captchaResponse) {
      this.errorMessage = '';
      this.isLoading = true;
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password, this.captchaResponse).subscribe({
        next: (response: AuthResponse) => this.handleLoginSuccess(response),
        error: (error) => this.handleLoginError(error)
      });
    } else {
      this.errorMessage = 'Please fill all required fields and complete reCAPTCHA';
    }
  }

  onCaptchaResolved(token: string): void {
    this.captchaResponse = token;
    this.loginForm.get('recaptcha')?.setValue(token);
  }

  sendResetLink(): void {
    if (this.forgotPasswordEmail) {
      this.authService.requestPasswordReset(this.forgotPasswordEmail).subscribe({
        next: () => {
          const modal = document.getElementById('forgotPasswordModal');
          // @ts-ignore
          bootstrap.Modal.getInstance(modal)?.hide();
          alert('Un email de réinitialisation a été envoyé');
        },
        error: (err) => {
          this.errorMessage = "Erreur lors de l'envoi du lien";
        }
      });
    }
  }

  navigateToFaceLogin(): void {
    this.router.navigate(['/face-login']);
  }

  private handleLoginSuccess(response: AuthResponse): void {
    
    console.log('LoginComponent: Login Success Response:', response);
    const userData = {
      token: response.token,
      email: response.email,
      firstName: response.firstName,
      role: response.role,
      idUser: response.idUser,
      verified: response.verified
    };
    localStorage.setItem('authData', JSON.stringify(userData));
    localStorage.setItem('token', response.token);
    this.isLoading = false;
    this.googleLoading = false;
    const redirectPath = response.role === 'ADMIN' ? '/admin/dashboard' : '/';
    console.log('LoginComponent: Redirecting to:', redirectPath);
    this.router.navigate([redirectPath]);
    if (response.role) {
      // Existing user with role - redirect
      this.router.navigate([redirectPath]);
    } else {
      // Show role selection modal
      this.showRoleSelectionModal = true;
      // ... modal display logic ...
    }
  }

  private handleLoginError(error: any, isGoogleLogin: boolean = false): void {
    console.error('LoginComponent: Login error:', error);
    if (!isGoogleLogin) {
      this.loginForm.get('recaptcha')?.reset();
      this.captchaResponse = null;
    }
    this.isLoading = false;
    this.googleLoading = false;
    if (error.error?.includes('banni')) {
      this.errorMessage = 'Votre compte est banni. Veuillez contacter l\'administrateur.';
    } else {
      this.errorMessage = isGoogleLogin
        ? 'Échec de la connexion avec Google: ' + (error.error || 'Erreur inconnue')
        : 'Email ou mot de passe incorrect';
    }
  }

  private handleGoogleError(error: any): void {
    console.error('LoginComponent: Google Sign-In error:', error);
    this.googleLoading = false;
    this.errorMessage = this.getGoogleErrorMessage(error);
  }

  private getGoogleErrorMessage(error: any): string {
    if (error.error === 'popup_closed_by_user') {
      return 'Vous avez annulé la connexion Google';
    }
    if (error.error === 'access_denied') {
      return 'Accès refusé par Google';
    }
    return 'Erreur lors de la connexion avec Google: ' + (error.message || error);
  }
}