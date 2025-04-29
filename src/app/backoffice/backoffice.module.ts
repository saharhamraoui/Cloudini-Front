import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Add RouterModule
import { BackofficeRoutingModule } from './backoffice-routing.module';
import { BackofficeComponent } from './backoffice.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { HeaderBackComponent } from './components/header-back/header-back.component';
import { DoctordashboardComponent } from './components/doctordashboard/doctordashboard.component';
import { AddConsultationBackComponent } from './components/consultationBack/add-consultation-back/add-consultation-back.component';
import { ListConsultationBackComponent } from './components/consultationBack/list-consultation-back/list-consultation-back.component';
import { UpdateConsultationBackComponent } from './components/consultationBack/update-consultation-back/update-consultation-back.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddRendezVousBackComponent } from './components/rendezVousBack/add-rendez-vous-back/add-rendez-vous-back.component';
import { ListRendezVousBackComponent } from './components/rendezVousBack/list-rendez-vous-back/list-rendez-vous-back.component';
import { UpdateRendezVousBackComponent } from './components/rendezVousBack/update-rendez-vous-back/update-rendez-vous-back.component';
import { QRCodeModule } from 'angularx-qrcode';
import { MatSnackBarModule } from '@angular/material/snack-bar'; // Ajoute ça
@NgModule({
  declarations: [
    BackofficeComponent,
    SidebarComponent,

    HeaderBackComponent,
       DoctordashboardComponent,
       AddConsultationBackComponent,
       ListConsultationBackComponent,
       UpdateConsultationBackComponent,
       AddRendezVousBackComponent,
       ListRendezVousBackComponent,
       UpdateRendezVousBackComponent,

  ],
  imports: [
    CommonModule,
    RouterModule, // Required for routerLink and routerLinkActiveOptions
    BackofficeRoutingModule,
     HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        QRCodeModule ,
        MatSnackBarModule, // AJOUTE LE MODULE ICI

  ]
})
export class BackofficeModule { }
