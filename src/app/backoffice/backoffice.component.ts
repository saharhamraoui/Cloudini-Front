import { Component } from '@angular/core';
import { NotificationService } from '../services/notification-service.service';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.css']
})
export class BackofficeComponent {

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    // Démarrer la vérification des notifications dès l'initialisation du composant
    this.notificationService.startNotificationCheck();
  }
}
