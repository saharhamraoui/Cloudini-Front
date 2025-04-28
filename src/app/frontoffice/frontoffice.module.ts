import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontofficeComponent } from './frontoffice.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FrontofficeRoutingModule } from './frontoffice-routing.module';
import { WebcamModule } from 'ngx-webcam';
import { ReclamationFormComponent } from './components/reclamation-form/reclamation-form.component';
import { ReclamationListComponent } from './components/reclamation-list/reclamation-list.component';
import { HomeComponent } from './components/home/home.component';
import { FooterFrontComponent } from './components/footer-front/footer-front.component';
import { HeaderFrontComponent } from './components/header-front/header-front.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    FrontofficeComponent,
    ReclamationFormComponent,
    ReclamationListComponent,
    HomeComponent,
    FooterFrontComponent,
    HeaderFrontComponent,
  ],
  imports: [
    CommonModule ,
    FrontofficeRoutingModule,
    WebcamModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class FrontofficeModule { }
