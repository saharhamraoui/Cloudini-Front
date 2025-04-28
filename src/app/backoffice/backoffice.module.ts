import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; // Add RouterModule
import { BackofficeRoutingModule } from './backoffice-routing.module';
import { BackofficeComponent } from './backoffice.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode';
import { ToastrModule } from 'ngx-toastr';
import { AddConsultationBackComponent } from './components/consultationBack/add-consultation-back/add-consultation-back.component';
import { ListConsultationBackComponent } from './components/consultationBack/list-consultation-back/list-consultation-back.component';
import { UpdateConsultationBackComponent } from './components/consultationBack/update-consultation-back/update-consultation-back.component';
import { DoctordashboardComponent } from './components/doctordashboard/doctordashboard.component';
import { HeaderBackComponent } from './components/header-back/header-back.component';
import { AddLeaveRequestComponent } from './components/LeaveRequestBack/add-leave-request/add-leave-request.component';
import { ListLeaveRequestComponent } from './components/LeaveRequestBack/list-leave-request/list-leave-request.component';
import { ListMedcicalRecordComponent } from './components/MedicalRecord/list-medcical-record/list-medcical-record.component';
import { AddPaiementComponent } from './components/PaiementBack/add-paiement/add-paiement.component';
import { ListPaiementComponent } from './components/PaiementBack/list-paiement/list-paiement.component';
import { AddPrescriptionComponent } from './components/PrescriptionBack/add-prescription/add-prescription.component';
import { ListPrescriptionComponent } from './components/PrescriptionBack/list-prescription/list-prescription.component';
import { AddRendezVousBackComponent } from './components/rendezVousBack/add-rendez-vous-back/add-rendez-vous-back.component';
import { ListRendezVousBackComponent } from './components/rendezVousBack/list-rendez-vous-back/list-rendez-vous-back.component';
import { UpdateRendezVousBackComponent } from './components/rendezVousBack/update-rendez-vous-back/update-rendez-vous-back.component';
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
       ListPrescriptionComponent,
       AddPrescriptionComponent,
       ListPaiementComponent,
       AddPaiementComponent,
       ListLeaveRequestComponent,
       ListMedcicalRecordComponent,
       AddLeaveRequestComponent,
  ],
  imports: [
    CommonModule,
    RouterModule, // Required for routerLink and routerLinkActiveOptions
    BackofficeRoutingModule,
     HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        QRCodeModule,
        ToastrModule,


  ]
})
export class BackofficeModule { }