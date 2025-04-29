import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RendezVous } from '../model/RendezVous';
import { environment } from './../../environments/environment.development';
import { Medecin } from '../model/Medecin';
import { Patient } from '../model/Patient';

@Injectable({
  providedIn: 'root'
})
export class RendezVousService {

  private urlServeurApi = environment.urlServiceApi ;

  constructor(private http: HttpClient) { }

  public getRendezVous(): Observable<RendezVous[]>{
<<<<<<< HEAD
   
    return this.http.get<RendezVous[]>(this.urlServeurApi+"/pidb/rendezVous/GetAll");
  }

 

  public getMedecins(): Observable<Medecin[]> {
    return this.http.get<Medecin[]>(this.urlServeurApi+"/pidb/rendezVous/getAllMedecins");
  }

  public getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.urlServeurApi+"/pidb/rendezVous/getAllPatients");
  }

  addRendezVous(rendezVous:RendezVous) {
   
    return this.http.post<RendezVous>(
      `${this.urlServeurApi}/pidb/rendezVous/addRendezVous`,
=======

    return this.http.get<RendezVous[]>(this.urlServeurApi+"/rendezVous/GetAll");
  }



  public getMedecins(): Observable<Medecin[]> {
    return this.http.get<Medecin[]>(this.urlServeurApi+"/rendezVous/getAllMedecins");
  }

  public getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.urlServeurApi+"/rendezVous/getAllPatients");
  }

  addRendezVous(rendezVous:RendezVous) {

    return this.http.post<RendezVous>(
      `${this.urlServeurApi}/rendezVous/addRendezVous`,
>>>>>>> blogfront
      rendezVous,
      { headers: { 'Content-Type': 'application/json' } }
  );
  }
  deleteRendezVous(id:number) :Observable<RendezVous> {
<<<<<<< HEAD
   
   return this.http.delete<RendezVous>(`${this.urlServeurApi}/pidb/rendezVous/deleteRendezVous/${id}`);
=======

   return this.http.delete<RendezVous>(`${this.urlServeurApi}/rendezVous/deleteRendezVous/${id}`);
>>>>>>> blogfront

  }

  // updateRendezVous(rendezVous: any): Observable<any> {
  //   return this.http.put(`${this.urlServeurApi}/pidb/rendezVous/updateRendezVous/${rendezVous.idRendezVous}`, rendezVous);
<<<<<<< HEAD
    
  // }

  updateRendezVous(rendezVous: any): Observable<any> {
    return this.http.put(`${this.urlServeurApi}/pidb/rendezVous/updateRendezVous`, rendezVous);
  }
  
  public getRendezVousByMedecin(medecinId: number): Observable<RendezVous[]> {
    return this.http.get<RendezVous[]>(`${this.urlServeurApi}/pidb/rendezVous/GetByMedecin/${medecinId}`);
  }

 
  
=======

  // }

  updateRendezVous(rendezVous: any): Observable<any> {
    return this.http.put(`${this.urlServeurApi}/rendezVous/updateRendezVous`, rendezVous);
  }

  public getRendezVousByMedecin(medecinId: number): Observable<RendezVous[]> {
    return this.http.get<RendezVous[]>(`${this.urlServeurApi}/rendezVous/GetByMedecin/${medecinId}`);
  }



>>>>>>> blogfront
  // updateRendezVous(rendezVous: RendezVous): Observable<RendezVous> {
  //   return this.http.put<RendezVous>(`${this.urlServeurApi}/pidb/rendezVous/updateRendezVous`, rendezVous);
  // }

<<<<<<< HEAD
  

  getRendezVousById(id:number) :Observable<RendezVous> {
    return this.http.get<RendezVous>(this.urlServeurApi+"/pidb/rendezVous/GetById/"+id);
    
  }

 
  
=======


  getRendezVousById(id:number) :Observable<RendezVous> {
    return this.http.get<RendezVous>(this.urlServeurApi+"/rendezVous/GetById/"+id);

  }


  getCreneauOptimal(medecinId: number): Observable<Date> {
    return this.http.get<Date>(this.urlServeurApi+"/rendezVous/proposer-creneau/"+medecinId);
  }


>>>>>>> blogfront
}
