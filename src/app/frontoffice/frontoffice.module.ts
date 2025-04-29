<<<<<<< HEAD
import { NgModule } from '@angular/core';
=======
import { NgModule, Component } from '@angular/core';
>>>>>>> blogfront
import { CommonModule } from '@angular/common';
import { FrontofficeComponent } from './frontoffice.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FrontofficeRoutingModule } from './frontoffice-routing.module';
<<<<<<< HEAD
import { WebcamModule } from 'ngx-webcam';
import { ReclamationFormComponent } from './components/reclamation-form/reclamation-form.component';
import { ReclamationListComponent } from './components/reclamation-list/reclamation-list.component';
import { HomeComponent } from './components/home/home.component';
import { FooterFrontComponent } from './components/footer-front/footer-front.component';
import { HeaderFrontComponent } from './components/header-front/header-front.component';
import { SharedModule } from '../shared/shared.module';


=======
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
<<<<<<< HEAD
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
=======
    AddRendezVousComponent,
    ListRendezVousComponent,
    UpdateRendezVousComponent,
    ListConsultationComponent,
    HomeComponent,
    FooterFrontComponent,
    HeaderFrontComponent,
    AssistOnalertComponent,
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
