import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Medecin } from 'src/app/model/Medecin';
import { Patient } from 'src/app/model/Patient';
import { RendezVous } from 'src/app/model/RendezVous';
import { RendezVousService } from 'src/app/services/rendez-vous.service';

@Component({
  selector: 'app-update-rendez-vous-back',
  templateUrl: './update-rendez-vous-back.component.html',
  styleUrls: ['./update-rendez-vous-back.component.css']
})
export class UpdateRendezVousBackComponent {
    id!:number
    rendezVous!:RendezVous
    rendezVousForm!:FormGroup
    patients: Patient[] = [];
    
  
    constructor(private rendezVousService: RendezVousService,private router:Router,private route:ActivatedRoute){}
  
    
    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
  
      // Initialisation du formulaire
      this.rendezVousForm = new FormGroup({
        dateRendezVous: new FormControl('', [Validators.required]),
        medecin: new FormControl('', [Validators.required]),
        patient: new FormControl('', [Validators.required])
      });
  
      // Récupérer les détails du rendez-vous
      this.rendezVousService.getRendezVousById(this.id).subscribe(
        (data) => {
          this.rendezVous = data;
          console.log('Rendez-vous récupéré :', this.rendezVous);
  
          // Charger la liste des médecins
          this.rendezVousService.getPatients().subscribe(
            (patientsData) => {
              this.patients = patientsData;
              console.log('Médecins chargés :', this.patients);
  
              // Remplir le formulaire avec les valeurs existantes
              this.rendezVousForm.patchValue({
                dateRendezVous: this.formatDateForInput(this.rendezVous.dateRendezVous),
                medecin: this.rendezVous.medecin.idUser,
                patient: this.rendezVous.patient?.idUser
              });
            },
            (error) => {
              console.error('Erreur lors du chargement des patients :', error);
            }
          );
        },
        (error) => {
          console.error('Erreur lors de la récupération du rendez-vous :', error);
        }
      );
      
    }
  
    formatDateForInput(date: string | Date): string {
      const d = new Date(date);
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      const hours = String(d.getHours()).padStart(2, '0');
      const minutes = String(d.getMinutes()).padStart(2, '0');
    
      return `${year}-${month}-${day}T${hours}:${minutes}`;
    }
      
  
     
    update() {
      if (this.rendezVousForm.valid) {
        const updateRendezVous = {
          idRendezVous: this.id, 
          dateRendezVous: this.rendezVousForm.value.dateRendezVous,
          medecin: {
            idUser: this.rendezVousForm.value.medecin // Id du médecin sélectionné
          },
          patient: { 
            idUser: this.rendezVous.patient.idUser // Garder l'ID du patient inchangé
          }
        
        };
    
        this.rendezVousService.updateRendezVous(updateRendezVous).subscribe(
          data => {
            console.log('Rendez-vous mis à jour avec succès', data);
            this.router.navigate(['/back/list-rendez-vous-back']);
          },
          err => {
            console.error('Erreur lors de la mise à jour du Rendez-vous', err);
            alert('Une erreur est survenue lors de la mise à jour.');
          }
        );
      }
    }
}
