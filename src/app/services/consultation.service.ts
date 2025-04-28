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
       
        return this.http.get<Consultation[]>(this.urlServeurApi+"/pidb/consultation/GetAll");
      }

        public getRendezVous(): Observable<RendezVous[]> {
          return this.http.get<RendezVous[]>(this.urlServeurApi+"/pidb/consultation/getAllRendezVous");
        }
      
        public getMedicalRecords(): Observable<MedicalRecord[]> {
          return this.http.get<MedicalRecord[]>(this.urlServeurApi+"/pidb/consultation/getAllMedicalRecord");
        }
      
        addConsultation(consultation:Consultation) {
         
          return this.http.post<Consultation>(
            `${this.urlServeurApi}/pidb/consultation/addConsultation`,
            consultation,
            { headers: { 'Content-Type': 'application/json' } }
        );
        }

        deleteConsultation(id:number) :Observable<Consultation> {
   
          return this.http.delete<Consultation>(`${this.urlServeurApi}/pidb/consultation/deleteConsultation/${id}`);
       
         }

         updateConsultation(consultation: any): Observable<any> {
          return this.http.put(`${this.urlServeurApi}/pidb/consultation/updateConsultation`, consultation);
        }

        getConsultationById(id:number) :Observable<Consultation> {
          return this.http.get<Consultation>(this.urlServeurApi+"/pidb/consultation/GetById/"+id);
          
        }
}
