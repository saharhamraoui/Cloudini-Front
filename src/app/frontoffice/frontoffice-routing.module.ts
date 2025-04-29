import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { AssistOnalertComponent } from './components/assist-onalert/assist-onalert.component';
import { HomeComponent } from './components/home/home.component';
import { MedicalRecordFrontComponent } from './components/medicalRecordFront/medical-record-front/medical-record-front.component';
import { DiscountRequestComponentComponent } from './components/paiementFront/discount-request-component/discount-request-component.component';
import { PaiementClientTnComponent } from './components/paiementFront/paiement-client-tn/paiement-client-tn.component';
import { PaiementClientComponent } from './components/paiementFront/paiement-client/paiement-client.component';
import { PaymentListComponent } from './components/paiementFront/payment-list/payment-list.component';
import { PrescriptionFrontComponent } from './components/PrescriptionFront/prescription-front/prescription-front.component';
import { FrontofficeComponent } from './frontoffice.component';
=======
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
>>>>>>> blogfront

const routes: Routes = [
  {
    path: '',
    component: FrontofficeComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
<<<<<<< HEAD
      { path: 'assist',component:AssistOnalertComponent },
      { path:'PaiementClient/:id',  component: PaiementClientComponent},
      { path:'PrescriptionClient',  component: PrescriptionFrontComponent},
      { path:'medicalRecordClient',  component: MedicalRecordFrontComponent},
      { path:'paymentList',  component: PaymentListComponent},
      { path:'paiementTn/:id',  component:PaiementClientTnComponent},
      { path: 'request-discount/:id', component: DiscountRequestComponentComponent }
      
=======
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
>>>>>>> blogfront
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
<<<<<<< HEAD
export class FrontofficeRoutingModule { }
=======
export class FrontofficeRoutingModule { }
>>>>>>> blogfront
