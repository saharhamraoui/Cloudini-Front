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
    PostListComponent,
      CreatePostComponent,
      MyPostsComponent,
      EditPostComponent,
      PostDetailsComponent,
    NotificationsComponent,
  ArticleSuggestionsComponent,
  ],
  imports: [
    CommonModule,
    FrontofficeRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
  ]
})
export class FrontofficeModule { }
