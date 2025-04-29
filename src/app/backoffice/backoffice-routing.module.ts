import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackofficeComponent } from './backoffice.component';
import { DoctordashboardComponent } from './components/doctordashboard/doctordashboard.component';
import { ListRendezVousBackComponent } from './components/rendezVousBack/list-rendez-vous-back/list-rendez-vous-back.component';
import { AddRendezVousBackComponent } from './components/rendezVousBack/add-rendez-vous-back/add-rendez-vous-back.component';
import { UpdateRendezVousBackComponent } from './components/rendezVousBack/update-rendez-vous-back/update-rendez-vous-back.component';
import { AddConsultationBackComponent } from './components/consultationBack/add-consultation-back/add-consultation-back.component';
import { ListConsultationBackComponent } from './components/consultationBack/list-consultation-back/list-consultation-back.component';
import { UpdateConsultationBackComponent } from './components/consultationBack/update-consultation-back/update-consultation-back.component';

const routes: Routes = [
  {
    path: '',
    component: BackofficeComponent,
    children: [
      {path: 'doctordashboard', component: DoctordashboardComponent },
  { path:'list-rendez-vous-back',  component: ListRendezVousBackComponent},
  { path:'addRendezVousBack',  component: AddRendezVousBackComponent},
  {path: 'updaterendezvousBack/:id', component: UpdateRendezVousBackComponent },
  { path:'addConsultation',  component: AddConsultationBackComponent},
  { path:'list-consultation-Back',  component: ListConsultationBackComponent},
  {path: 'updateConsultationBack/:id', component: UpdateConsultationBackComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }