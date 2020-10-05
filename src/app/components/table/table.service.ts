import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { FormModel } from '../../models/FormModel'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  URL = environment.apiUrl

  constructor(private http: HttpClient) { }
  
  getForms(): Observable<FormModel[]> {
    return this.http.get<FormModel[]>(`https://agrow-teste-api.herokuapp.com/formularios`);      
  }

  deleteForm(id: number): Observable<void> {
    return this.http.delete<void>(`https://agrow-teste-api.herokuapp.com/formularios/${id}`)
  }

}
