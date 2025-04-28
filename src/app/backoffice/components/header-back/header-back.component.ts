import { Component, OnInit } from '@angular/core';import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header-back',
  templateUrl: './header-back.component.html',
  styleUrls: ['./header-back.component.css']
})
export class HeaderBackComponent implements OnInit {
  loggedUser = '';
  currRole = '';
  title = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private _router: Router  ) {}

    ngOnInit(): void {
      const rawUser = sessionStorage.getItem('loggedUser');
      this.loggedUser = rawUser ? rawUser.replace(/"/g, '') : '';
    
      this.currRole = sessionStorage.getItem('ROLE') || '';
    
      if (this.loggedUser === 'admin@gmail.com') {
        this.title = 'Admin Dashboard';
      } else if (this.currRole === 'Medecin') {
        this.title = 'Medecin Dashboard';
      } else if (this.currRole === 'Patient') {
        this.title = 'Patient Dashboard';
      }
    }
    navigateHome() {
      console.log('navigateHome called, role:', this.currRole); // Vérifie la valeur du rôle
      // if (this.currRole === 'Medecin') {
      //   this._router.navigate(['/doctordashboard']);
      // }

      this._router.navigate(['/doctordashboard']);
    }
    

  logout() {
    sessionStorage.clear();
    if (this.currRole == 'admin') this._router.navigate(['/login']);
    else this._router.navigate(['/login']), window.location.reload();
;
  }

 

}
