// home.component.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoggedIn = false;
  userName = '';
  userRole = '';
  obj = {
    specialization: '',
    address: ''
  };

  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private _router: Router,
  ) {}

  ngOnInit(): void {
    this.checkAuthStatus();
  }

  checkAuthStatus(): void {
    const authData = localStorage.getItem('authData');
    if (authData) {
      const user = JSON.parse(authData);
      this.isLoggedIn = true;
      this.userName = user.firstName;
      this.userRole = user.role;
    }
  }

  logout(): void {
    this.authService.logout();
    this.isLoggedIn = false;
    window.location.reload();
  }

  navigateTosignup() {
    this._router.navigate(['/role-selection']);
  }

  navigate() {
    this._router.navigate(['/login']);
  }

  
}