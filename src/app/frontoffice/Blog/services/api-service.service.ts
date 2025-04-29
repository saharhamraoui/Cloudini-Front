import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AiService {
  private apiUrl = 'http://localhost:8087/pi/ai/suggest-articles';

  constructor(private http: HttpClient) {}

  suggestArticles(specialty: string, keywords: string): Observable<{articles: string}> {
    const body = { specialty, keywords };
    return this.http.post<{articles: string}>(this.apiUrl, body);
  }
}
