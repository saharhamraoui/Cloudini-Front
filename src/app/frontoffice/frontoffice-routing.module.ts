import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssistOnalertComponent } from './components/assist-onalert/assist-onalert.component';
import { HomeComponent } from './components/home/home.component';
import { MedicalRecordFrontComponent } from './components/medicalRecordFront/medical-record-front/medical-record-front.component';
import { DiscountRequestComponentComponent } from './components/paiementFront/discount-request-component/discount-request-component.component';
import { PaiementClientTnComponent } from './components/paiementFront/paiement-client-tn/paiement-client-tn.component';
import { PaiementClientComponent } from './components/paiementFront/paiement-client/paiement-client.component';
import { PaymentListComponent } from './components/paiementFront/payment-list/payment-list.component';
import { PrescriptionFrontComponent } from './components/PrescriptionFront/prescription-front/prescription-front.component';
import { FrontofficeComponent } from './frontoffice.component';

const routes: Routes = [
  {
    path: '',
    component: FrontofficeComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'assist',component:AssistOnalertComponent },
      { path:'PaiementClient/:id',  component: PaiementClientComponent},
      { path:'PrescriptionClient',  component: PrescriptionFrontComponent},
      { path:'medicalRecordClient',  component: MedicalRecordFrontComponent},
      { path:'paymentList',  component: PaymentListComponent},
      { path:'paiementTn/:id',  component:PaiementClientTnComponent},
      { path: 'request-discount/:id', component: DiscountRequestComponentComponent }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontofficeRoutingModule { }