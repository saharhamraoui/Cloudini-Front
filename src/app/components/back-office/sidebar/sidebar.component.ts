import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { trigger, style, animate, transition, stagger, query } from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
    trigger('taskFadeIn', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(10px)' }),
          stagger(100, [
            animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class SidebarComponent implements OnInit {
  isCollapsed = false;
  isLoggedIn = false;
  isAdmin = false;
  isMedecinOrAdmin = false;
  showTasks = false;
  isLoadingTasks = false;
  currentUser = {
    firstName: '',
    lastName: '',
    role: ''
  };
  tasks = [
    { title: 'Vérifier les rendez-vous', completed: false },
    { title: 'Mettre à jour les dossiers patients', completed: true },
    { title: 'Planifier les chauffeurs', completed: false }
  ];

  @Output() sidebarToggled = new EventEmitter<void>();
  @Output() tasksToggled = new EventEmitter<boolean>();

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.checkAuthStatus();
  }

  checkAuthStatus(): void {
    const authData = localStorage.getItem('authData');
    if (authData) {
      try {
        const user = JSON.parse(authData);
        this.isLoggedIn = !!user.token;
        this.currentUser = {
          firstName: user.firstName || '',
          lastName: user.lastName || '',
          role: user.role || ''
        };
        this.isAdmin = user.role === 'ADMIN';
        this.isMedecinOrAdmin = ['ADMIN', 'MEDECIN'].includes(user.role);
      } catch (e) {
        console.error('Erreur lors du parsing des données d\'authentification', e);
        this.logout();
      }
    } else {
      this.logout();
    }
  }

  getAvatarInitials(): string {
    const firstInitial = this.currentUser.firstName?.charAt(0) || '';
    const lastInitial = this.currentUser.lastName?.charAt(0) || '';
    return `${firstInitial}${lastInitial}`.toUpperCase();
  }

  toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
    this.sidebarToggled.emit();
  }

  toggleTasks(): void {
    this.showTasks = !this.showTasks;
    this.tasksToggled.emit(this.showTasks);
    if (this.showTasks) {
      this.isLoadingTasks = true;
      // Simulate async task loading
      setTimeout(() => {
        this.isLoadingTasks = false;
      }, 1000);
    }
  }

  logout(): void {
    this.authService.logout();
    localStorage.removeItem('authData');
    localStorage.removeItem('token');
    this.isLoggedIn = false;
    this.currentUser = { firstName: '', lastName: '', role: '' };
    this.router.navigate(['/login']);
  }
}