import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent {
  isSidebarCollapsed = false;
  isTasksVisible = false;
  currentUserEmail: string | null = null;

  constructor(private authService: AuthService) {
    const authData = localStorage.getItem('authData');
    if (authData) {
      this.currentUserEmail = JSON.parse(authData).email;
    }
  }
  

  onToggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  onTasksToggled(isVisible: boolean) {
    this.isTasksVisible = isVisible;
  }

  logout() {
    this.authService.logout();
  }
}