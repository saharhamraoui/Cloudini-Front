import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontofficeComponent } from './frontoffice.component';
import { ReclamationFormComponent } from './components/reclamation-form/reclamation-form.component';
import { ReclamationListComponent } from './components/reclamation-list/reclamation-list.component';

const routes: Routes = [
  {
    path: '',
    component: FrontofficeComponent,
    children: [
      { path: '', redirectTo: 'reclamation', pathMatch: 'full' },   // ✅ This line is critical
      { path: 'reclamation', component: ReclamationFormComponent },
      { path: 'my-reclamations', component: ReclamationListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontofficeRoutingModule { }
