import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  userName = '';
  userPhoto = 'assets/profile.png';


  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.checkAuthStatus();
  }

  checkAuthStatus(): void {
    const authData = localStorage.getItem('authData');
    if (authData) {
      try {
        const parsed = JSON.parse(authData);
        this.isLoggedIn = !!parsed.token;
        this.userName = parsed.firstName || parsed.email || 'User'; 
        this.userPhoto = parsed.photoUrl || 'assets/profile.png';
      } catch (e) {
        this.clearAuth();
      }
    } else {
      this.clearAuth();
    }
  }
  
  private clearAuth(): void {
    this.isLoggedIn = false;
    this.userName = '';
  }
  
  logout(): void {
    this.authService.logout();
    this.clearAuth();
    this.router.navigate(['/login']);
  }
  
  private clearAuthData(): void {
    this.isLoggedIn = false;
    this.userName = '';
    localStorage.removeItem('authData');
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.userPhoto = 'assets/profile.png';

  }
}