import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { FormModel } from '../../models/FormModel'

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }

  getForm(id: number): Observable<FormModel> {
    return this.http.get<FormModel>(`https://aw-agrow-api.herokuapp.com/formularios/${id}`);      
  }

  saveForm(form: FormModel): Observable<FormModel> {
    const date = form.date.toString()
    const day = date.substr(0, 2)
    const month = date.substr(2, 2)
    const year = date.substr(4, 4)
    const finalDate = `${day}/${month}/${year}`
    form.date = finalDate
    
    return this.http.post<FormModel>('https://aw-agrow-api.herokuapp.com/formularios', form)
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

    

    return this.http.put<FormModel>(`https://aw-agrow-api.herokuapp.com/formularios/${form.id}`, form)
  }


}

19111991