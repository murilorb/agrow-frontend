import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { FormModel } from '../../models/FormModel'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  URL = environment.apiUrl

  constructor(private http: HttpClient) { }

  getForm(id: number): Observable<FormModel> {
    return this.http.get<FormModel>(`${URL}/formularios/${id}`);      
  }

  saveForm(form: FormModel): Observable<FormModel> {
    const date = form.date.toString()
    const day = date.substr(0, 2)
    const month = date.substr(2, 2)
    const year = date.substr(4, 4)
    const finalDate = `${day}/${month}/${year}`
    form.date = finalDate
    
    return this.http.post<FormModel>(`${URL}/formularios`, form)
  }

  updateForm(form: FormModel): Observable<FormModel> {

    if(form.date.length === 8) {
      const date = form.date.toString()
      const day = date.substr(0, 2)
      const month = date.substr(2, 2)
      const year = date.substr(4, 4)
      const finalDate = `${day}/${month}/${year}`
      form.date = finalDate
    }

    

    return this.http.put<FormModel>(`${URL}/formularios/${form.id}`, form)
  }


}

19111991