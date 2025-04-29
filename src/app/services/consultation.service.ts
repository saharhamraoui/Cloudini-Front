import { Consultation } from 'src/app/model/Consultation';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { RendezVous } from '../model/RendezVous';
import { MedicalRecord } from '../model/MedicalRecord';

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {

 
  private urlServeurApi = environment.urlServiceApi ;
  
    constructor(private http: HttpClient) { }
    public getConsultation(): Observable<Consultation[]>{
       
<<<<<<< HEAD
        return this.http.get<Consultation[]>(this.urlServeurApi+"/pidb/consultation/GetAll");
      }

        public getRendezVous(): Observable<RendezVous[]> {
          return this.http.get<RendezVous[]>(this.urlServeurApi+"/pidb/consultation/getAllRendezVous");
        }
      
        public getMedicalRecords(): Observable<MedicalRecord[]> {
          return this.http.get<MedicalRecord[]>(this.urlServeurApi+"/pidb/consultation/getAllMedicalRecord");
=======
        return this.http.get<Consultation[]>(this.urlServeurApi+"/consultation/GetAll");
      }

        public getRendezVous(): Observable<RendezVous[]> {
          return this.http.get<RendezVous[]>(this.urlServeurApi+"/consultation/getAllRendezVous");
        }
      
        public getMedicalRecords(): Observable<MedicalRecord[]> {
          return this.http.get<MedicalRecord[]>(this.urlServeurApi+"/consultation/getAllMedicalRecord");
>>>>>>> blogfront
        }
      
        addConsultation(consultation:Consultation) {
         
          return this.http.post<Consultation>(
<<<<<<< HEAD
            `${this.urlServeurApi}/pidb/consultation/addConsultation`,
=======
            `${this.urlServeurApi}/consultation/addConsultation`,
>>>>>>> blogfront
            consultation,
            { headers: { 'Content-Type': 'application/json' } }
        );
        }

        deleteConsultation(id:number) :Observable<Consultation> {
   
<<<<<<< HEAD
          return this.http.delete<Consultation>(`${this.urlServeurApi}/pidb/consultation/deleteConsultation/${id}`);
=======
          return this.http.delete<Consultation>(`${this.urlServeurApi}/consultation/deleteConsultation/${id}`);
>>>>>>> blogfront
       
         }

         updateConsultation(consultation: any): Observable<any> {
<<<<<<< HEAD
          return this.http.put(`${this.urlServeurApi}/pidb/consultation/updateConsultation`, consultation);
        }

        getConsultationById(id:number) :Observable<Consultation> {
          return this.http.get<Consultation>(this.urlServeurApi+"/pidb/consultation/GetById/"+id);
=======
          return this.http.put(`${this.urlServeurApi}/consultation/updateConsultation`, consultation);
        }

        getConsultationById(id:number) :Observable<Consultation> {
          return this.http.get<Consultation>(this.urlServeurApi+"/consultation/GetById/"+id);
>>>>>>> blogfront
          
        }
}
