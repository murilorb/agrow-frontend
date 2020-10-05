import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { FormModel } from '../../models/FormModel'

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http: HttpClient) { }
  
  getForms(): Observable<FormModel[]> {
    return this.http.get<FormModel[]>(`/api/formularios`);      
  }

  deleteForm(id: number): Observable<void> {
    return this.http.delete<void>(`/api/formularios/${id}`)
  }

}
