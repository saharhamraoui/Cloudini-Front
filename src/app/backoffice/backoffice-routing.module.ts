import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackofficeComponent } from './backoffice.component';
import { AddConsultationBackComponent } from './components/consultationBack/add-consultation-back/add-consultation-back.component';
import { ListConsultationBackComponent } from './components/consultationBack/list-consultation-back/list-consultation-back.component';
import { UpdateConsultationBackComponent } from './components/consultationBack/update-consultation-back/update-consultation-back.component';
import { DoctordashboardComponent } from './components/doctordashboard/doctordashboard.component';
import { AddLeaveRequestComponent } from './components/LeaveRequestBack/add-leave-request/add-leave-request.component';
import { ListLeaveRequestComponent } from './components/LeaveRequestBack/list-leave-request/list-leave-request.component';
import { ListMedcicalRecordComponent } from './components/MedicalRecord/list-medcical-record/list-medcical-record.component';
import { ListPaiementComponent } from './components/PaiementBack/list-paiement/list-paiement.component';
import { ListPrescriptionComponent } from './components/PrescriptionBack/list-prescription/list-prescription.component';
import { AddRendezVousBackComponent } from './components/rendezVousBack/add-rendez-vous-back/add-rendez-vous-back.component';
import { ListRendezVousBackComponent } from './components/rendezVousBack/list-rendez-vous-back/list-rendez-vous-back.component';
import { UpdateRendezVousBackComponent } from './components/rendezVousBack/update-rendez-vous-back/update-rendez-vous-back.component';

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
  {path: 'listPrescription', component: ListPrescriptionComponent },
  {path: 'listPaiement', component: ListPaiementComponent },
  {path: 'listLeaveRequest', component: ListLeaveRequestComponent },
  {path: 'listMedicalRecord', component: ListMedcicalRecordComponent },
  {path: 'addLeaveRequest', component: AddLeaveRequestComponent },





    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }