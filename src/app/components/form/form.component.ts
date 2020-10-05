import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { FormModel } from '../../models/FormModel'

import { FormService } from './form.service'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

 

  form: FormModel = {
    id: null,
    client: '',
    requester: '',
    description: '',
    date: '',
    responsible: ''
  }

  constructor(private route: ActivatedRoute, private formservice: FormService) { }

  ngOnInit(): void {
    const formId = this.route.snapshot.params['id']

    if(formId){
      this.getFormData(formId)
     
    }
  }

  get editing() {
    return Boolean(this.form.id)
  }

  save(form: NgForm) {
    if(this.editing) {
      this.updateFormData()
    } else {
      this.addForm()
    }


    form.reset({ responsible: ''})
  }

  addForm() {
    
    this.formservice.saveForm(this.form).subscribe((res: FormModel) => {
      console.log('form saved')
    })

    
  }

  getFormData(id: number) {
    this.formservice.getForm(id).subscribe((res: FormModel) => {
      this.form = res
   })
  }

  saveFormData() {
    this.formservice.saveForm(this.form).subscribe((res: FormModel) => {
      console.log('form saved')
    })
  }

  updateFormData() {
    this.formservice.updateForm(this.form).subscribe((res: FormModel) => {
      console.log('form updated')
    })
  }

}
