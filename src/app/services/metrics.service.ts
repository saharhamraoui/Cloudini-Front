import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MetricsService {
  private apiUrl = 'http://localhost:8087/Pi/api/metrics';

  constructor(private http: HttpClient) {}

  getReclamationMetrics(): Observable<any> {
    return this.http.get(`${this.apiUrl}/reclamations`);
  }

  getTop5ActiveReclamations(): Observable<any> {
    return this.http.get(`${this.apiUrl}/top5`);
  }

  getCategoryDistribution(): Observable<any> {
    return this.http.get(`${this.apiUrl}/category-distribution`);
  }
}
