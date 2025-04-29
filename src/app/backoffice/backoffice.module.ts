import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { BackofficeRoutingModule } from './backoffice-routing.module';
import { BackofficeComponent } from './backoffice.component';

// Components
import { DoctordashboardComponent } from './components/doctordashboard/doctordashboard.component';
import { HeaderBackComponent } from './components/header-back/header-back.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FournisseurListComponent } from './components/fournisseur-list/fournisseur-list.component';
import { FournisseurDetailComponent } from './components/fournisseur-detail/fournisseur-detail.component';
import { MedicamentListComponent } from './components/medicament-list/medicament-list.component';
import { CommandeListComponent } from './components/commande-list/commande-list.component';
import { GestionCommandesComponent } from './components/gestion-commandes/gestion-commandes.component';
import { StockComponent } from './components/stock/stock.component';
import { GestionfournisseurComponent } from './components/gestionfournisseur/gestionfournisseur.component';
import { GestionmedsComponent } from './components/gestionmeds/gestionmeds.component';
import { SuivreCommandeComponent } from './components/suivre-commande/suivre-commande.component';
import { ValidationCommandeComponent } from './components/validation-commande/validation-commande.component';
import { DashboardStockComponent } from './components/dashboard-stock/dashboard-stock.component';
import { ChatbotComponent } from './components/chatbotStock/chatbot.component';

import { AddConsultationBackComponent } from './components/consultationBack/add-consultation-back/add-consultation-back.component';
import { ListConsultationBackComponent } from './components/consultationBack/list-consultation-back/list-consultation-back.component';
import { UpdateConsultationBackComponent } from './components/consultationBack/update-consultation-back/update-consultation-back.component';

import { AddRendezVousBackComponent } from './components/rendezVousBack/add-rendez-vous-back/add-rendez-vous-back.component';
import { ListRendezVousBackComponent } from './components/rendezVousBack/list-rendez-vous-back/list-rendez-vous-back.component';
import { UpdateRendezVousBackComponent } from './components/rendezVousBack/update-rendez-vous-back/update-rendez-vous-back.component';

import { AddLeaveRequestComponent } from './components/LeaveRequestBack/add-leave-request/add-leave-request.component';
import { ListLeaveRequestComponent } from './components/LeaveRequestBack/list-leave-request/list-leave-request.component';

import { ListMedcicalRecordComponent } from './components/MedicalRecord/list-medcical-record/list-medcical-record.component';

import { AddPaiementComponent } from './components/PaiementBack/add-paiement/add-paiement.component';
import { ListPaiementComponent } from './components/PaiementBack/list-paiement/list-paiement.component';

import { AddPrescriptionComponent } from './components/PrescriptionBack/add-prescription/add-prescription.component';
import { ListPrescriptionComponent } from './components/PrescriptionBack/list-prescription/list-prescription.component';

// Modules
import { QRCodeModule } from 'angularx-qrcode';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ToastrModule } from 'ngx-toastr';
import { NgChartsModule } from 'ng2-charts';

// Pipes
import { StatusFilterPipe } from '../pipes/status-filter.pipe';

@NgModule({
  declarations: [
    BackofficeComponent,
    DoctordashboardComponent,
    HeaderBackComponent,
    SidebarComponent,
    FournisseurListComponent,
    FournisseurDetailComponent,
    MedicamentListComponent,
    CommandeListComponent,
    GestionCommandesComponent,
    StockComponent,
    GestionfournisseurComponent,
    GestionmedsComponent,
    SuivreCommandeComponent,
    ValidationCommandeComponent,
    DashboardStockComponent,
    ChatbotComponent,
    AddConsultationBackComponent,
    ListConsultationBackComponent,
    UpdateConsultationBackComponent,
    AddRendezVousBackComponent,
    ListRendezVousBackComponent,
    UpdateRendezVousBackComponent,
    AddLeaveRequestComponent,
    ListLeaveRequestComponent,
    ListMedcicalRecordComponent,
    AddPaiementComponent,
    ListPaiementComponent,
    AddPrescriptionComponent,
    ListPrescriptionComponent,
    StatusFilterPipe
  ],
  imports: [
    CommonModule,
    BackofficeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    QRCodeModule,
    MatSnackBarModule,
    ToastrModule.forRoot(),
    NgChartsModule
  ]
})
export class BackofficeModule { }
