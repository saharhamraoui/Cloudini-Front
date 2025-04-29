import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from '../shared/shared.module';
import { BilanListComponent } from './components/BilanFront/bilan-list/bilan-list.component';
import { BilanUploadComponent } from './components/BilanFront/bilan-upload/bilan-upload.component';
import { ChatBotComponent } from './components/PrescriptionFront/chat-bot/chat-bot.component';
import { PrescriptionFrontComponent } from './components/PrescriptionFront/prescription-front/prescription-front.component';
import { AssistOnalertComponent } from './components/assist-onalert/assist-onalert.component';
import { ListConsultationComponent } from './components/consultation/list-consultation/list-consultation.component';
import { FooterFrontComponent } from './components/footer-front/footer-front.component';
import { HeaderFrontComponent } from './components/header-front/header-front.component';
import { HomeComponent } from './components/home/home.component';
import { MedicalRecordFrontComponent } from './components/medicalRecordFront/medical-record-front/medical-record-front.component';
import { DiscountRequestComponentComponent } from './components/paiementFront/discount-request-component/discount-request-component.component';
import { PaiementClientTnComponent } from './components/paiementFront/paiement-client-tn/paiement-client-tn.component';
import { PaiementClientComponent } from './components/paiementFront/paiement-client/paiement-client.component';
import { PaymentListComponent } from './components/paiementFront/payment-list/payment-list.component';
import { AddRendezVousComponent } from './components/rendezVous/add-rendez-vous/add-rendez-vous.component';
import { ListRendezVousComponent } from './components/rendezVous/list-rendez-vous/list-rendez-vous.component';
import { UpdateRendezVousComponent } from './components/rendezVous/update-rendez-vous/update-rendez-vous.component';
import { FrontofficeRoutingModule } from './frontoffice-routing.module';
import { FrontofficeComponent } from './frontoffice.component';


@NgModule({
  declarations: [
    FrontofficeComponent,
    AddRendezVousComponent,
    ListRendezVousComponent,
    UpdateRendezVousComponent,
    ListConsultationComponent,
    HomeComponent,
    FooterFrontComponent,
    HeaderFrontComponent,
    AssistOnalertComponent,
    ChatBotComponent,
    PrescriptionFrontComponent,
    MedicalRecordFrontComponent,
    PaymentListComponent,
    BilanUploadComponent,
    BilanListComponent,
    PaiementClientComponent,
    PaiementClientTnComponent,
    DiscountRequestComponentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,               // Keep this first among form modules
    ReactiveFormsModule,       // Then ReactiveFormsModule
    HttpClientModule,
    SharedModule,
    FrontofficeRoutingModule,  // No need for duplicate
    ToastrModule.forRoot(),
    MatDialogModule,
    



  ]
})
export class FrontofficeModule { }
