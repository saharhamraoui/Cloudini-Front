import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontofficeComponent } from './frontoffice.component';
import { HomeComponent } from './components/home/home.component';
import { PostListComponent } from './Blog/components/post-list/post-list.component';
import { CreatePostComponent } from './Blog/components/create-post/create-post.component';
import { MyPostsComponent } from './Blog/components/my-posts/my-posts.component';
import { PostDetailsComponent } from './Blog/components/post-detail/post-detail.component';
import { EditPostComponent } from './Blog/components/edit-post/edit-post.component';
import { ArticleSuggestionsComponent } from './Blog/components/article-suggestions-component/article-suggestions-component.component';
import { NotificationsComponent } from './Blog/components/notifications/notifications.component';
import { ListRendezVousComponent } from './components/rendezVous/list-rendez-vous/list-rendez-vous.component';
import { AddRendezVousComponent } from './components/rendezVous/add-rendez-vous/add-rendez-vous.component';
import { UpdateRendezVousComponent } from './components/rendezVous/update-rendez-vous/update-rendez-vous.component';
import { ListConsultationComponent } from './components/consultation/list-consultation/list-consultation.component';
import { DiseaseComponent } from './components/disease/disease.component';

const routes: Routes = [
  {
    path: '',
    component: FrontofficeComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'blog', component: PostListComponent },
      { path: 'create-post', component: CreatePostComponent },
      { path: 'my-posts', component: MyPostsComponent },
      { path: 'post-detail/:id', component: PostDetailsComponent },
      { path: 'edit-post/:id', component: EditPostComponent },
      { path: 'article-suggestions', component: ArticleSuggestionsComponent },
      { path: 'notifications', component: NotificationsComponent },
      { path:'list-rendez-vous',  component: ListRendezVousComponent},
      { path:'addRendezVous',  component: AddRendezVousComponent},
      {path: 'updaterendezvous/:id', component: UpdateRendezVousComponent },
      { path:'list-consultation',  component: ListConsultationComponent},
      { path:'disease',  component: DiseaseComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontofficeRoutingModule { }
