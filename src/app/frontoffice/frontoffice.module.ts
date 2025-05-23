import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontofficeComponent } from './frontoffice.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FrontofficeRoutingModule } from './frontoffice-routing.module';
import { AddRendezVousComponent } from './components/rendezVous/add-rendez-vous/add-rendez-vous.component';
import { ListRendezVousComponent } from './components/rendezVous/list-rendez-vous/list-rendez-vous.component';
import { UpdateRendezVousComponent } from './components/rendezVous/update-rendez-vous/update-rendez-vous.component';
import { ListConsultationComponent } from './components/consultation/list-consultation/list-consultation.component';
import { HomeComponent } from './components/home/home.component';
import { FooterFrontComponent } from './components/footer-front/footer-front.component';
import { HeaderFrontComponent } from './components/header-front/header-front.component';
import { AssistOnalertComponent } from './components/assist-onalert/assist-onalert.component';
import { SharedModule } from '../shared/shared.module';

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
    AssistOnalertComponent
  ],
  imports: [
    CommonModule,
    FrontofficeRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ]
})
export class FrontofficeModule { }
