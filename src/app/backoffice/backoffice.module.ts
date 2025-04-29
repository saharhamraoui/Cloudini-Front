import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgChartsModule } from 'ng2-charts';

import { BackofficeRoutingModule } from './backoffice-routing.module';
import { BackofficeComponent } from './backoffice.component';

import { DoctordashboardComponent } from './components/doctordashboard/doctordashboard.component';
import { AddConsultationBackComponent } from './components/consultationBack/add-consultation-back/add-consultation-back.component';
import { ListConsultationBackComponent } from './components/consultationBack/list-consultation-back/list-consultation-back.component';
import { UpdateConsultationBackComponent } from './components/consultationBack/update-consultation-back/update-consultation-back.component';
import { AddRendezVousBackComponent } from './components/rendezVousBack/add-rendez-vous-back/add-rendez-vous-back.component';
import { ListRendezVousBackComponent } from './components/rendezVousBack/list-rendez-vous-back/list-rendez-vous-back.component';
import { UpdateRendezVousBackComponent } from './components/rendezVousBack/update-rendez-vous-back/update-rendez-vous-back.component';

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
import { StatusFilterPipe } from '../pipes/status-filter.pipe';
import { SuivreCommandeComponent } from './components/suivre-commande/suivre-commande.component';
import { ValidationCommandeComponent } from './components/validation-commande/validation-commande.component';
import { DashboardStockComponent } from './components/dashboard-stock/dashboard-stock.component';
import { ChatbotComponent } from './components/chatbotStock/chatbot.component';

// rec
import { ReclamationManagementComponent } from './components/reclamations/reclamation-management/reclamation-management.component';
import { ResponseFormComponent } from './components/reclamations/response-form/response-form.component';
import { MetricsDashboardComponent } from './components/metrics-dashboard/metrics-dashboard.component';
import { FacialDetectionComponent } from './components/facial-detection/facial-detection.component';

@NgModule({
  declarations: [
    BackofficeComponent,
    DoctordashboardComponent,
    AddConsultationBackComponent,
    ListConsultationBackComponent,
    UpdateConsultationBackComponent,
    AddRendezVousBackComponent,
    ListRendezVousBackComponent,
    UpdateRendezVousBackComponent,
    ReclamationManagementComponent,
    ResponseFormComponent,
    MetricsDashboardComponent,
    FacialDetectionComponent,
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
    StatusFilterPipe,
    SuivreCommandeComponent,
    ValidationCommandeComponent,
    DashboardStockComponent,
    ChatbotComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BackofficeRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    QRCodeModule,
    MatSnackBarModule,
    NgChartsModule
  ]
})
export class BackofficeModule { }
