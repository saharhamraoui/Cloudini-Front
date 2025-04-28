import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontofficeComponent } from './frontoffice.component';
import { HomeComponent } from './components/home/home.component';
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