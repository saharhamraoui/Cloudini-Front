<<<<<<< HEAD
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

=======
import { NgModule, Component } from '@angular/core';
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
import { PostListComponent } from './Blog/components/post-list/post-list.component';
import { CreatePostComponent } from './Blog/components/create-post/create-post.component';
import { MyPostsComponent } from './Blog/components/my-posts/my-posts.component';
import { EditPostComponent } from './Blog/components/edit-post/edit-post.component';
import { PostDetailsComponent } from './Blog/components/post-detail/post-detail.component';
import { NotificationsComponent } from './Blog/components/notifications/notifications.component';
import { ArticleSuggestionsComponent } from './Blog/components/article-suggestions-component/article-suggestions-component.component';
import { TagInputModule } from 'ngx-chips';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { DiseaseComponent } from './components/disease/disease.component';
const calendarRootModule = CalendarModule.forRoot({
  provide: DateAdapter,
  useFactory: adapterFactory,
});
>>>>>>> blogfront

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
<<<<<<< HEAD
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

=======
    PostListComponent,
      CreatePostComponent,
      MyPostsComponent,
      EditPostComponent,
      PostDetailsComponent,
    NotificationsComponent,
  ArticleSuggestionsComponent,
    DiseaseComponent,


  ],
  imports: [
    CommonModule,
    FrontofficeRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    })
>>>>>>> blogfront

  ]
})
export class FrontofficeModule { }
