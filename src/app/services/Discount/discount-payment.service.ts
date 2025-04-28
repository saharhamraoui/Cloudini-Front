import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paiement } from 'src/app/model/Paiement';
import { environment } from 'src/environments/environment.development';

const NAV_URL = environment.apiURL+"/api/discount-requests";


@Injectable({
  providedIn: 'root'
})
export class DiscountPaymentService {

  constructor(private http: HttpClient) { }

  uploadDisabilityCard(paymentId: number, file: File, message?: string): Observable<any> {
    const formData = new FormData();
    formData.append('file', file, file.name);
    if (message) {
      formData.append('message', message);
    }

    return this.http.post(
      `${NAV_URL}/upload-disability-card/${paymentId}`,
      formData
    );
  }


  // Add these methods to your paiement.service.ts
approveDiscount(paymentId: number): Observable<Paiement> {
  return this.http.put<Paiement>(`${NAV_URL}/${paymentId}/approve-discount`, {});
}

rejectDiscount(paymentId: number, reason: string): Observable<Paiement> {
  return this.http.put<Paiement>(`${NAV_URL}/${paymentId}/reject-discount`, { reason });
}

getDisabilityCard(paymentId: number): Observable<ArrayBuffer> {
  return this.http.get(`${NAV_URL}/${paymentId}/disability-card`, {
    responseType: 'arraybuffer'
  });
}
}