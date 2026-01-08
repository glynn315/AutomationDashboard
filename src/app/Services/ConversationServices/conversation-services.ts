import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Logs } from '../../Models/LogsList/logs.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConversationServices {
  private apiUrl  = `${environment.apiUrl}/conversation`;

  constructor(private http: HttpClient) {}

  displayListLogs(): Observable<Logs[]>{
    return this.http.get<Logs[]>(this.apiUrl);
  }
  displayListLogsPending(): Observable<Logs[]>{
    return this.http.get<Logs[]>(`${this.apiUrl}/logs`);
  }
}
